
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
// import {CategoryList,CategoryEdit,CategoryCreate} from './components/Category';
// import {UserList,UserEdit,UserCreate} from './components/Users';
// import {CustomerList,CustomerEdit,CustomerCreate} from './components/Customer';
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




// const dataProvider = fakeDataProvider({
//     phones,category,user,customer

// })

const App = () => (
    <Admin dashboard={DashBoard} dataProvider={dataProvider} authProvider={authProvider}>
        <Resource name="phones" list={PhoneList} edit={PhoneEdit} create={PhoneCreate} icon={PhoneIcon} />
        <Resource name="brands" list={BrandList} edit={BrandEdit} create={BrandCreate} />
        {/* <Resource name="category" list={CategoryList} edit={CategoryEdit} create={CategoryCreate} />
        <Resource name="user" list={UserList} edit={UserEdit} create={UserCreate}  icon={UserIcon}/>
        <Resource name="customer" list={CustomerList} edit={CustomerEdit} create={CustomerCreate} /> */}
    </Admin>
);

export default App;