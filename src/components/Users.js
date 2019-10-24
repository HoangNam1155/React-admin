import React from 'react';
import { List, Datagrid, TextField, EditButton,Edit, SimpleForm,DisabledInput,TextInput, Create } from 'react-admin';
export const UserList = props => (
    <List {...props} sort={{order:'DESC'}}>
        <Datagrid >
            <TextField source="id" />
            <TextField source="username" />
            <TextField source="password" />
            <EditButton />
        </Datagrid>
    </List>
);

export const UserEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="type" />
            <TextInput source="username" />
            <TextInput source="password" />
        </SimpleForm>
    </Edit>
);


export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <TextInput source="username" />
            <TextInput source="password" />
        </SimpleForm>
    </Create>
);