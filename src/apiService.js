import axios from 'axios';

export default class API {
  /**
   * @param {*} _options
   */
  constructor(_options = {}) {
    if (!this.axios) {
      this.axios = axios.create({
        baseURL: 'http://localhost:7000/api/',
        responseType: 'json'
    });
      this.axios.defaults.params = {};
      this.axios.defaults.headers.common.Accept = '*/*';
    }
  }
  /**
   * @returns  {Promise}
   */
  post(action, params) {
    return this.axios
      .request(action, {
        method: 'post',
        data: params
      })
      .then(response => {
        return {
          data: response.data
        };
      })
      .catch(error => {
        if (error.response && error.response.data) {
          throw error.response.data;
        } else {
          throw error;
        }
      });
  }
  // get(action,params){
      
  //   return this.axios
  //   .request(action, {
  //     method: 'get',
  //     body: params
  //   })
  //   .then(response=>{
  //       return {
  //           data: response.data
  //         };
  //       })
  //       .catch(error => {
  //       if (error.response && error.response.data) {
  //         throw error.response.data;
  //       } else {
  //         throw error;
  //       }
  //     });
  // }
}
