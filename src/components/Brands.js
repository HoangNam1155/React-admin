import React from 'react';
import { List, Datagrid, TextField, EditButton, Edit, SimpleForm, DisabledInput, TextInput, Create } from 'react-admin';
export const BrandList = props => (
    <List {...props} sort={{ order: 'DESC' }}>
        <Datagrid >
            <TextField source="id" />
            <TextField source="name_brand" />
            <EditButton />
        </Datagrid>
    </List>
);

export const BrandEdit = props => (
    <Edit {...props}>
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