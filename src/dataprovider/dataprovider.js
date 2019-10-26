import phoneProvider from './phoneProvider';
export default (type, resource, params) => {
    console.log(resource)
    switch (resource) {
        case 'phones':
            return phoneProvider(type,params)
        default:
        break;
    }
};
