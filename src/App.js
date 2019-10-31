
// in src/App.js
import React from 'react';
// import react-admin
import { Admin, Resource } from 'react-admin';
//import fakeData
import fakeDataProvider from 'ra-data-fakerest';
// import react-admin-login-logout
import authProvider from './components/authProvider';
// import components
import { PhoneList, PhoneEdit, PhoneCreate } from './components/Phones';
import { BrandList, BrandEdit, BrandCreate } from './components/Brands';
import DashBoard from './components/Dashboard';
// import fakedata
import phones from './fakeData/phone.json';
import category from './fakeData/category.json';
import user from './fakeData/user.json';
import customer from './fakeData/customer.json';
// import icon from material
import PhoneIcon from '@material-ui/icons/Smartphone';
import UserIcon from '@material-ui/icons/People';
import dataProvider from './dataprovider/dataprovider';


const App = () => (
    <Admin dashboard={DashBoard} dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="phones" list={PhoneList} edit={PhoneEdit} create={PhoneCreate} icon={PhoneIcon} />
        <Resource name="brands" list={BrandList} edit={BrandEdit} create={BrandCreate} />
    </Admin>
);

export default App;