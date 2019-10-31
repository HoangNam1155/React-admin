
// in src/App.js
import React from 'react';
// import react-admin
import { Admin, Resource } from 'react-admin';
// import react-admin-login-logout
import authProvider from './dataprovider/authProvider';
// import components
import { PhoneList, PhoneEdit, PhoneCreate } from './components/Phones';
import { CustomerList, CustomerEdit, CustomerCreate } from './components/Customers';
import { SaleList, SaleEdit, SaleCreate } from './components/Sales';
import { OrderedList, OrderedEdit, OrderedCreate } from './components/Ordered';
import DashBoard from './components/Dashboard';
// import icon from material
import PhoneIcon from '@material-ui/icons/Smartphone';
import UserIcon from '@material-ui/icons/People';
import dataProvider from './dataprovider/dataprovider';


const App = () => (
    <Admin dashboard={DashBoard} dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="Phones" list={PhoneList} edit={PhoneEdit} create={PhoneCreate} icon={PhoneIcon} />
        <Resource name="Customers" list={CustomerList} edit={CustomerEdit} create={CustomerCreate} icon={UserIcon} />
        <Resource name="Sales" list={SaleList} edit={SaleEdit} create={SaleCreate} />
        <Resource name="Ordered" list={OrderedList} edit={OrderedEdit} create={OrderedCreate} />
    </Admin>
);

export default App;