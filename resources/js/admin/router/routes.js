function page(path) {
  return () => import(/* webpackChunkName: '' */ `~/admin/pages/${path}`).then(m => m.default || m)
}

export default [
  {path: '/admin/login', name: 'login', component: page('auth/login.vue')},
  {
    path: '/admin/password/forgot', name: 'password_forgot', component: page('auth/password_forgot.vue')
  },
  {path: '/admin/password/reset/:token', name: 'password_reset', component: page('auth/password_reset.vue')},
  {
    path: '',
    component: page('dashboard/auth.vue'),
    children: [
      {path: '/admin', redirect: {name: 'dashboard.users.index'}},
      {path: '/admin/index', name: 'dashboard.index', redirect: {name: 'dashboard.users.index'}},
      {
        path: 'admin/users',
        component: {render: (c) => c('router-view')},
        alias: 'dashboard.users.index',
        children: [
          {path: '', redirect: {name: 'dashboard.users.index'}},
          {
            path: 'index', name: 'dashboard.users.index', component: page('dashboard/users/index.vue')
          }
        ]
      },
      {
        path: 'admin/products',
        component: {render: (c) => c('router-view')},
        alias: 'dashboard.products.index',
        children: [
          {path: '', redirect: {name: 'dashboard.products.index'}},
          {
            path: 'index', name: 'dashboard.products.index', component: page('dashboard/products/index.vue')
          },
          {
            path: 'store', name: 'dashboard.products.store', component: page('dashboard/products/store.vue')
          },
          {
            path: 'edit/:id', name: 'dashboard.products.edit', component: page('dashboard/products/edit.vue')
          }
        ]
      },
    ]
  },

  {path: '*', component: page('errors/404.vue')}
]
