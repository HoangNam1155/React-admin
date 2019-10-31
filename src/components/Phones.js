import React from 'react';
import {Filter, List, Datagrid, TextField, EditButton, Edit, SimpleForm, DisabledInput, TextInput, Create,SelectInput,BooleanField,BooleanInput,ImageField } from 'react-admin';
const PhoneTitle = ({ record }) => {
    return <span>{record ? `"${record.name_phone}"` : ''}</span>;
};
export const PhoneList = props => (
    <List {...props} >
        <Datagrid >
            <TextField source="name_phone" />
            <TextField source="price" />
            <TextField source="brand" />
            <TextField source="sale" />
            <ImageField source="img" title="title" />
            <TextField source="description" />
            <BooleanField source="is_sale" />
            <BooleanField source="is_new" />
            <EditButton />
        </Datagrid>
    </List>
);
export const PhoneEdit = props => (
    <Edit title={<PhoneTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="name_phone" />
            <TextInput source="price" />
            <TextInput source="brand" />
            <TextInput source="sale" />
            <TextInput source="description" />
            <TextInput source="img" />
            <BooleanInput label="Is_Sale" source="is_sale" />
            <BooleanInput label="Is_New" source="is_new" />
        </SimpleForm>
    </Edit>
);
export const PhoneCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name_phone" />
            <TextInput source="price" />
            <TextInput source="brand" />
            <TextInput source="sale" />
            <TextInput source="description" />
            <TextInput source="img" />
            <BooleanInput label="Is_Sale" source="is_sale" />
            <BooleanInput label="Is_New" source="is_new" />
        </SimpleForm>
    </Create>
);