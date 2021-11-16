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
      {path: 'test', name: 'test', component: page('Index_2.vue')},
    ]
  },

  {path: '*', component: page('errors/404.vue')}
]
