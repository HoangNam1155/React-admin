// in src/posts.js
import React from 'react';
import { List, Datagrid, TextField, ReferenceField, EditButton, Edit, SimpleForm,DisabledInput,ReferenceInput,SelectInput,TextInput,LongTextInput, Create } from 'react-admin';

export const PostList = props => (
    <List {...props}>
        <Datagrid >
            <TextField source="id" />
            <ReferenceField source="userId" reference="users">    
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            <TextField source="body" />
            <EditButton />
        </Datagrid>
    </List>
);


export const PostEdit = props => (
    <Edit {...props}>
        <SimpleForm>
          <DisabledInput source="id" />
            <ReferenceInput source="userId" reference="users">
              <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
           <LongTextInput source="body" />
        </SimpleForm>
    </Edit>
);


export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Create>
);
