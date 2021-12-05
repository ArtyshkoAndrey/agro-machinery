import axios from "axios";

export const UrlRemove = '/api/admin/image/remove/';

/**
 *
 * @param {Number} id
 * @returns {Promise<AxiosResponse<never>>}
 */
export function removeImage(id) {
  return axios.delete(UrlRemove + id)
    .then(response => {
      return response.data.payload.image
    })
    .catch(e => {
      // catch errors here if you want
      console.log(e);
    });
}