function page(path) {
  return () => import(/* webpackChunkName: '' */ `~/user/pages/${path}`).then(m => m.default || m)
}

export default [
  {
    path: '/',
    component: page('layout_guest.vue'),
    children: [
      {path: '', redirect: {name: 'index'}},
      {path: 'index', name: 'index', component: page('Index.vue')},
      {path: 'catalog', name: 'catalog', component: page('Catalog.vue')},
      {path: 'cart', name: 'cart', component: page('Cart.vue')},
      {path: 'product/:id', name: 'product', component: page('Product.vue')}
    ]
  },

  {path: '*', component: page('errors/404.vue')}
]
