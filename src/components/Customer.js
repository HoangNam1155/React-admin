import React from 'react';
import { List, Datagrid, TextField, EditButton,Edit, SimpleForm,DisabledInput,TextInput, Create } from 'react-admin';
export const CustomerList = props => (
    <List {...props} sort={{order:'DESC'}}>
        <Datagrid >
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="phone" />
            <TextField source="address" />
            <EditButton />
        </Datagrid>
    </List>
);

export const CustomerEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="type" />
            <TextInput source="name" />
            <TextInput source="phone" />
            <TextInput source="address" />
        </SimpleForm>
    </Edit>
);


export const CustomerCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="name" />
            <TextInput source="phone" />
            <TextInput source="address" />
        </SimpleForm>
    </Create>
);