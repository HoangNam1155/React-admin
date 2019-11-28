import { GET_LIST, CREATE, UPDATE, GET_ONE, DELETE, GET_MANY, GET_MANY_REFERENCE } from 'react-admin';
//import _ from 'lodash';
import API from '../apiService';
const service = new API();

const phoneProvider = (type, params) => {
    switch (type) {
        //get all
        case GET_LIST: {
            return service.post('getPhones', params).then((response) => {
                const data = response.data.phone
                data.forEach(element => {
                    element.id = element._id
                });
                console.log(data)
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
            return service.post(`getPhone/${params.id}`).then((response) => {
                //console.log(response)
                const data = response.data.result
                data.id = data._id
                //console.log(data)
                return Promise.resolve({ data: data })
            }).catch((err) => {
                return Promise.resolve({ data: { err, id: -1 } })
            });
        }
        //get many
        case GET_MANY:{
            return service.post('getSaleFromArray',params).then((response) => {
                console.log(response)
                const data = response.data.data
                data.forEach(element => {
                    element.id = element._id
                });
                if(data.message){
                    throw new Error(data.message)
                }
                // const data = _.get(response.data, 'responses',{});
                return Promise.resolve({data:data})
            }).catch((err) => {
                return Promise.resolve({data:{err,id:-1}})
            });
        }

        //update
        case UPDATE: {
            return service.post(`updatePhone/${params.id}`, params).then((response) => {
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
            return service.post('createPhone', params.data).then((response) => {
                //console.log(response)
                const data = response.data.result
                data.id = data._id
                if (data.message) {
                    throw new Error(data.message)
                }
                return Promise.resolve({ data: data })
            }).catch((err) => {
                return err;
            });
        }
        //delete
        case DELETE: {
            return service.post(`deletePhone/${params.id}`).then((response) => {
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
export default phoneProvider