import axios from 'axios'
import store from '~/user/store'
import Swal from 'sweetalert2'

// Request interceptor
axios.interceptors.request.use(request => {
  const locale = store.getters['lang/locale']
  if (locale) {
    request.headers.common['Accept-Language'] = locale
  }

  return request
})

// Response interceptor
axios.interceptors.response.use(response => response, error => {
  const { status } = error.response

  if (status >= 500) {
    Swal.fire({
      icon: 'error',
      title: 'Ошибка',
      text: 'Произошла непредвиденная ошибка на сервере',
      reverseButtons: true,
      confirmButtonText: 'Окей',
      cancelButtonText: 'Отмена'
    })
  }

  return Promise.reject(error)
})
