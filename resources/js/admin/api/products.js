import axios from "axios";

export function getProducts () {
  return axios.get('/api/admin/products')
    .then(response => {
      return response.data.payload.products
    })
}

export function getProduct (id) {
  return axios.get('/api/admin/products/' + id)
    .then(response => {
      return response.data.payload.product
    })
}
