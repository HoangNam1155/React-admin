import React from 'react';
import {Filter, List, Datagrid, TextField, EditButton,Edit, SimpleForm,DisabledInput,TextInput, Create,ReferenceField,SelectInput,ReferenceInput } from 'react-admin';
export const PhoneList = props => (
    <List {...props} sort={{order:'DESC'} }>
        <Datagrid >
            <TextField source="id" />
            <TextField source="name_phone" />
            <TextField source="price" />
            <EditButton />
        </Datagrid>
    </List>
);

export const PhoneEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="name_phone" />
            <TextInput source="price" />
        </SimpleForm>
    </Edit>
);


export const PhoneCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name_phone" />
            <TextInput source="price" />
        </SimpleForm>
    </Create>
);