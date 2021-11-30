import Cookies from 'js-cookie'
import axios from "axios";
import * as types from '../mutation-types'
import * as _ from 'lodash'
import i18n from '~/user/plugins/i18n'

export const state = {
  products: Cookies.get('products') ? Cookies.get('products').split(',').map(e => Number(e)) : [],
  response_products: []
}

// getters
export const getters = {
  products: state => state.products,
  response_products: state => state.response_products,
  include: state => id => {
    return state.products.includes(Number(id))
  },
  products_count: state => state.products.length
}

// mutations
export const mutations = {
  [types.ADD_PRODUCT]  (state, id) {
    state.products.push(id)
    Cookies.set('products', state.products, 365)
  },
  [types.REMOVE_PRODUCT]  (state, id) {
    state.products = state.products.filter( e => Number(e) !==  Number(id) )
    state.response_products = state.response_products.filter(e => Number(e.id) !== Number(id))
    Cookies.set('products', state.products, 365)
  },

  [types.FETCH_PRODUCTS_DB]  (state, ids) {
    state.products = ids
    Cookies.set('products', state.products, 365)
  },
  [types.RESPONSE_PRODUCTS]  (state, products) {
    state.response_products = products
  }
}

// actions
export const actions = {
  add ({ commit, state }, payload) {
    if (!state.products.includes(Number(payload))) {
      commit(types.ADD_PRODUCT, Number(payload))
      this.dispatch('cart/fetchProducts')
    }
  },

  remove ({ commit }, payload) {
    commit(types.REMOVE_PRODUCT, Number(payload))
  },

  fetchProducts ({ commit, state }) {
    axios.post('/api/users/cart', {
        ids: state.products
    })
      .then(r => {
        console.log('Actions Cart - Get products: ', r.data.payload.products)
        let ids = _.sortBy(r.data.payload.products.map(e => e.id))
        let idsState  = _.sortBy(state.products)
        commit(types.RESPONSE_PRODUCTS, r.data.payload.products)
        if(!_.isEqual(ids, idsState)) {
          commit(types.FETCH_PRODUCTS_DB, ids)
          this._vm.$Swal.fire({
            title: i18n.t('vuex.cart.product_deleted'),
            icon: 'question',
            confirmButtonText: i18n.t('vuex.cart.confirm'),
            showCloseButton: true
          })
        }
        console.log('test isEq: ', _.isEqual(ids, idsState))
      })
  }
}
