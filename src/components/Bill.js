import React from 'react';
import { List, Datagrid, TextField, EditButton, Edit, SimpleForm, DisabledInput, TextInput, Create, DateInput,ReferenceField, ReferenceInput, SelectInput,DateField } from 'react-admin';
const BillTitle = ({ record }) => {
    return <span>{record ? `"${record.date}"` : ''}</span>;
};
export const BillList = props => (
    <List {...props} sort={{ order: 'DESC' }}>
        <Datagrid >
            <ReferenceField label="Customer" source="customer" reference="Customers">
                <TextField source="name_customer" />
            </ReferenceField>
            <DateField source="date" />
            <TextField source="price" />
            <TextField source="quantity" />
            <TextField source="total" />
            <EditButton />
        </Datagrid>
    </List>
);
export const BillEdit = props => (
    <Edit title={<BillTitle />} {...props}>
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
export const BillCreate = props => (
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