import { GET_LIST,CREATE,UPDATE,GET_ONE,DELETE,GET_MANY,GET_MANY_REFERENCE } from 'react-admin';
import _ from 'lodash';
import API from '../apiService';
const service = new API();

const phoneProvider = (type,params) => {
    switch (type) {
        case GET_LIST: {
            return service.post('phones',params).then((response) => {
                // const data = _.get(response.data, 'results',{});
                // const total = _.get(response.data, 'count');
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
        case GET_ONE:{
            return service.get(`phone/${params.id}`).then((response)=>{
                console.log(response)
                const data = response.data.result
                data.id = data._id
                console.log(data)
                return Promise.resolve({data})
                
            }).catch((err) => {
                throw new Error(err);
              });
        }
}
}

export default phoneProvider