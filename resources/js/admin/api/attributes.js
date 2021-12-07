import axios from "axios";

export function getAttributes () {
  return axios.get('/api/admin/attributes')
    .then(response => {
      return response.data.payload.attributes
    })
}

export function getAttribute (id) {
  return axios.get('/api/admin/attributes/' + id)
    .then(response => {
      return response.data.payload.attribute
    })
}
