import React from 'react';
import { Filter, List, Datagrid, TextField, EditButton, Edit, SimpleForm, DisabledInput, TextInput, Create, SelectInput, BooleanField, BooleanInput, ImageField, ReferenceField, ReferenceInput } from 'react-admin';
const PhoneTitle = ({ record }) => {
    return <span>{record ? `"${record.name_phone}"` : ''}</span>;
};
export const PhoneList = props => (
    <List {...props} >
        <Datagrid >
            <TextField source="name_phone" />
            <TextField source="price" />
            <TextField source="brand" />
            <ReferenceField label="Sale" source="sale._id" reference="Sales">
                <TextField source="name_sale" />
            </ReferenceField>
            <ImageField source="img" title="title" />
            <TextField source="description" />
            <BooleanField source="is_sale" />
            <BooleanField source="is_new" />
            <EditButton />
        </Datagrid>
    </List>
);
export const PhoneEdit = props => (
    <Edit title={<PhoneTitle />} {...props}>
        <SimpleForm>
            <DisabledInput source="id" />
            <TextInput source="name_phone" />
            <TextInput source="price" />
            <SelectInput source="brand" choices={[
                { id: 'Iphone', name: 'Iphone' },
                { id: 'Samsung', name: 'Samsung' },
                { id: 'Oppo', name: 'Oppo' },
                { id: 'Xiaomi', name: 'Xiaomi' },
                { id: 'Vivo', name: 'Vivo' },
                { id: 'Realme', name: 'Realme' },
                { id: 'Huawei', name: 'Huawei' },
                { id: 'Nokia', name: 'Nokia' },
            ]} />
            <ReferenceInput label="Sale" source="sale._id" reference="Sales">
                <SelectInput optionText="name_sale" />
            </ReferenceInput>
            <TextInput source="description" />
            <TextInput source="img" />
            <BooleanInput label="Is_Sale" source="is_sale" />
            <BooleanInput label="Is_New" source="is_new" />
        </SimpleForm>
    </Edit>
);
export const PhoneCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name_phone" />
            <TextInput source="price" />
            <SelectInput source="brand" choices={[
                { id: 'Iphone', name: 'Iphone' },
                { id: 'Samsung', name: 'Samsung' },
                { id: 'Oppo', name: 'Oppo' },
                { id: 'Xiaomi', name: 'Xiaomi' },
                { id: 'Vivo', name: 'Vivo' },
                { id: 'Realme', name: 'Realme' },
                { id: 'Huawei', name: 'Huawei' },
                { id: 'Nokia', name: 'Nokia' },
            ]} />
            {/* <TextInput source="sale" /> */}
            <ReferenceInput label="Sale" source="sale._id" reference="Sales">
                <SelectInput optionText="name_sale" />
            </ReferenceInput>
            <TextInput source="description" />
            <TextInput source="img" />
            <BooleanInput label="Is_Sale" source="is_sale" />
            <BooleanInput label="Is_New" source="is_new" />
        </SimpleForm>
    </Create>
);