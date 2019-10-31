import React from 'react';
import { List, Datagrid, TextField, EditButton, Edit, SimpleForm, DisabledInput, TextInput, Create } from 'react-admin';
const BrandTitle = ({ record }) => {
    return <span>{record ? `"${record.name_brand}"` : ''}</span>;
};
export const BrandList = props => (
    <List {...props} sort={{ order: 'DESC' }}>
        <Datagrid >
            <TextField source="name_brand" />
            <EditButton />
        </Datagrid>
    </List>
);
export const BrandEdit = props => (
    <Edit title={<BrandTitle/>} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="name_brand" />
        </SimpleForm>
    </Edit>
);
export const BrandCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name_brand" />
        </SimpleForm>
    </Create>
);