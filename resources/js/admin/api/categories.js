import axios from "axios";

export function getCategories () {
  return axios.get('/api/admin/categories')
    .then(response => {
      return response.data.payload.categories
    })
}

export function getCategory (id) {
  return axios.get('/api/admin/categories/' + id, {
      params: {
        has_parent: true
      }
    })
    .then(response => {
      return response.data.payload.category
    })
}

export function removeCategory (id) {
  return axios.delete('/api/admin/categories/' + id)
    .then(response => {
      return response.data.payload.category
    })
}
