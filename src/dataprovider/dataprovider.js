import phoneProvider from './phoneProvider';
import customerProvider from './customerProvider';
import saleProvider from './saleProvider';
export default (type, resource, params) => {
    console.log(resource)
    switch (resource) {
        case 'Phones':
            return phoneProvider(type, params)
        case 'Customers':
            return customerProvider(type, params)
        case 'Sales':
            return saleProvider(type, params)
        default:
            break;
    }
};
