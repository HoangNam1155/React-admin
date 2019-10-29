import phoneProvider from './phoneProvider';
import brandProvider from './brandProvider';
export default (type, resource, params) => {
    console.log(resource)
    switch (resource) {
        case 'phones':
            return phoneProvider(type, params)
        case 'brands':
            return brandProvider(type, params)
            default:
            break;
    }
};
