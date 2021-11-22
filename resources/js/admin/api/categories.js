import axios from "axios";

export function getCategories () {
  return axios.get('/api/admin/categories')
    .then(response => {
      return response.data.payload.categories
    })
    .catch(e => {
      // catch errors here if you want
      console.log(e);
    });
}