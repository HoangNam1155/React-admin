import React from 'react';
import { List, Datagrid, TextField, EditButton, Edit, SimpleForm, DisabledInput, TextInput, Create, DateInput,ReferenceField, ReferenceInput, SelectInput } from 'react-admin';
const OrderedTitle = ({ record }) => {
    return <span>{record ? `"${record.date}"` : ''}</span>;
};
export const OrderedList = props => (
    <List {...props} sort={{ order: 'DESC' }}>
        <Datagrid >
            <ReferenceField label="Customer" source="customer" reference="Customers">
                <TextField source="name_customer" />
            </ReferenceField>
            <TextField source="date" />
            <TextField source="price" />
            <TextField source="quantity" />
            <TextField source="total" />
            <EditButton />
        </Datagrid>
    </List>
);
export const OrderedEdit = props => (
    <Edit title={<OrderedTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <ReferenceInput label="Customer" source="customer" reference="Customers">
                <SelectInput optionText="name_customer" />
            </ReferenceInput>
            <DateInput source="date" />
            <TextInput source="price" />
            <TextInput source="quantity" />
        </SimpleForm>
    </Edit>
);
export const OrderedCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <ReferenceInput label="Customer" source="customer" reference="Customers">
                <SelectInput optionText="name_customer" />
            </ReferenceInput>
            <DateInput source="date" />
            <TextInput source="price" />
            <TextInput source="quantity" />
        </SimpleForm>
    </Create>
);