import React from 'react';
import { List, Datagrid, TextField, EditButton, Edit, SimpleForm, DisabledInput, TextInput, Create } from 'react-admin';
const SaleTitle = ({ record }) => {
    return <span>{record ? `"${record.name_sale}"` : ''}</span>;
};
export const SaleList = props => (
    <List {...props} sort={{ order: 'DESC' }}>
        <Datagrid >
            <TextField source="name_sale" />
            <TextField source="price_sale" />
            <EditButton />
        </Datagrid>
    </List>
);

export const SaleEdit = props => (
    <Edit title={<SaleTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="name_sale" />
            <TextInput source="price_sale" />
        </SimpleForm>
    </Edit>
);


export const SaleCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name_sale" />
            <TextInput source="price_sale" />
        </SimpleForm>
    </Create>
);