import React from 'react';
import { List, Datagrid, TextField, EditButton,Edit, SimpleForm,DisabledInput,TextInput, Create } from 'react-admin';
export const CategoryList = props => (
    <List {...props} sort={{order:'DESC'}}>
        <Datagrid >
            <TextField source="type_id" />
            <TextField source="type" />
            <EditButton />
        </Datagrid>
    </List>
);

export const CategoryEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="type_id" />
            <TextInput source="type" />
        </SimpleForm>
    </Edit>
);


export const CategoryCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="type_id" />
            <TextInput source="type" />
        </SimpleForm>
    </Create>
);