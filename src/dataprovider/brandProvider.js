import { GET_LIST, CREATE, UPDATE, GET_ONE, DELETE, GET_MANY, GET_MANY_REFERENCE } from 'react-admin';
//import _ from 'lodash';
import API from '../apiService';
const service = new API();

const brandProvider = (type, params) => {
    switch (type) {
        //get all
        case GET_LIST: {
            return service.post('getBrands', params).then((response) => {
                console.log(response)
                const data = response.data.brand
                data.forEach(element => {
                    element.id = element._id
                });
                //console.log(data)
                return Promise.resolve({
                    data,
                    total: response.data.count
                })
            }).catch((err) => {
                throw new Error(err);
            });
        }
        // get one
        case GET_ONE: {
            return service.post(`getBrand/${params.id}`).then((response) => {
                console.log(response)
                const data = response.data.result
                data.id = data._id
                //console.log(data)
                return Promise.resolve({ data: data })

            }).catch((err) => {
                return Promise.resolve({ data: { err, id: -1 } })
            });
        }

        //update
        case UPDATE: {
            return service.post(`updateBrand/${params.id}`, params).then((response) => {
                console.log(response)
                const data = response.data.body.result
                data.id = data._id
                return Promise.resolve({ data: data })
            }).catch((err) => {
                return Promise.resolve({ data: { err, id: -1 } })
            });
        }

        //create
        case CREATE: {
            return service.post('createBrand', params.data).then((response) => {
                //console.log(response)
                const data = response.data.result
                data.id = data._id
                if (data.message) {
                    throw new Error(data.message)
                }
                return Promise.resolve({ data: data })
            }).catch((err) => {
                return Promise.resolve({ data: { err, id: -1 } })
            });
        }

        //delete
        case DELETE: {
            return service.post(`deleteBrand/${params.id}`).then((response) => {
                const data = (response, 'data', {});
                data.id = data._id
                if (data.message) {
                    throw new Error(data.message)
                }
                return Promise.resolve({ data: data })
            }).catch((err) => {
                return Promise.resolve({ data: { err, id: -1 } })
            });
        }
    }
}
export default brandProvider