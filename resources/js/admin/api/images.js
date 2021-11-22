import axios from "axios";

/**
 *
 * @param {Number} id
 * @returns {Promise<AxiosResponse<never>>}
 */
export function removeImage (id) {
  return axios.delete('/api/admin/products/image/remove/' + id)
    .then(response => {
      return response.data.payload.image
    })
    .catch(e => {
      // catch errors here if you want
      console.log(e);
    });
}