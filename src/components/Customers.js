import React from 'react';
import { List, Datagrid, TextField, EditButton, Edit, SimpleForm, DisabledInput, TextInput, Create,ReferenceField } from 'react-admin';
const CustomerTitle = ({ record }) => {
    return <span>{record ? `"${record.name_customer}"` : ''}</span>;
};
export const CustomerList = props => (
    <List {...props} sort={{ order: 'DESC' }}>
        <Datagrid >
            <TextField source="name_customer" />
            <TextField source="phone_customer" />
            <TextField source="address_customer" />
            <EditButton />
        </Datagrid>
    </List>
);

export const CustomerEdit = props => (
    <Edit title={<CustomerTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="name_customer" />
            <TextInput source="phone_customer" />
            <TextInput source="address_customer" />
        </SimpleForm>
    </Edit>
);


export const CustomerCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name_customer" />
            <TextInput source="phone_customer" />
            <TextInput source="address_customer" />
        </SimpleForm>
    </Create>
);