import React from 'react';
import { List, Datagrid, TextField, EditButton, Edit, SimpleForm, DisabledInput, TextInput, Create, DateInput,ReferenceField, ReferenceInput, SelectInput,DateField,ReferenceArrayField,Show,Tab,ImageField,ShowButton,DeleteButton,TabbedShowLayout } from 'react-admin';
export const BillList = props => (
    <List {...props} sort={{ order: 'DESC' }}>
        <Datagrid rowClick="show">
            <DateField source="date"/>
            <TextField source="customer.name_customer"/>
            <TextField source="customer.phone_customer"/>
            <TextField source="customer.address_customer"/>
            <TextField source="deliveryState"/>
        </Datagrid>
    </List>
);
// export const BillCreate = props => (
//     <Create {...props}>
//         <SimpleForm  redirect='Bill'>
//             <DisabledInput source="id" />
//             <DateInput source="date"/>
//             <TextInput source="address"/>    
//         </SimpleForm>
//     </Create>
// );

const ViewBill = props => (
    <Show title="Bill Detail" {...props}>
      <TabbedShowLayout>
        <Tab label="Summary">
        <TextField source="id" />
        <DateField source="date" />
        <TextField source="customer.name_customer"/>
        <TextField source="customer.phone_customer"/>
        <TextField source="customer.address_customer"/>
        <TextField source="deliveryState" />
        </Tab>
        <Tab label="BillDetail">
          <ReferenceArrayField source='billDetail' reference="billDetails">
            <Datagrid>
              <TextField source="phone._id" />
              <TextField source="phone.name_phone" />
              <ImageField source="phone.img"/>
              <TextField source="price" />
              <TextField source="quantity"/>
              {/* <ShowButton/>
              <DeleteButton/> */}
            </Datagrid>
          </ReferenceArrayField>
        </Tab>
      </TabbedShowLayout>
    </Show>
  );
export default ViewBill;
