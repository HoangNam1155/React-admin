import React from 'react';
import {Filter, List, Datagrid, TextField, EditButton,Edit, SimpleForm,DisabledInput,TextInput, Create,ReferenceField,SelectInput,ReferenceInput } from 'react-admin';


const PhoneFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Type" source="type_id" reference="category" allowEmpty>
            <SelectInput optionText="type" />
        </ReferenceInput>
    </Filter>
);

export const PhoneList = props => (
    <List filters={<PhoneFilter/>} {...props} sort={{order:'DESC'} }>
        <Datagrid >
            <TextField source="id" />
            <TextField source="name_phone" />
            <ReferenceField source="type_id" reference="category">    
                <TextField source="type" />
            </ReferenceField>
            <TextField source="price" />
            <EditButton />
        </Datagrid>
    </List>
);

export const PhoneEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
             <ReferenceInput source="type_id" reference="category">    
                <SelectInput optionText="type" />
            </ReferenceInput>
            <TextInput source="name_phone" />
            <TextInput source="price" />
        </SimpleForm>
    </Edit>
);


export const PhoneCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <ReferenceInput source="type_id" reference="category">    
                <SelectInput optionText="type" />
            </ReferenceInput>
            <TextInput source="name_phone" />
            <TextInput source="price" />
        </SimpleForm>
    </Create>
);