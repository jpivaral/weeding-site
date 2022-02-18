import * as React from "react";
import { List, Datagrid, TextField, EditButton, NumberField, NumberInput, Edit, SimpleForm, TextInput, Create } from 'react-admin';

export const FamilyList = props => (
    <List {...props} pagination={false} perPage={1000}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <NumberField source="adultMembers" />
            <NumberField source="childrenMembers" />
            <EditButton />
        </Datagrid>
    </List>
);

export const FamilyEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextField source="id" />
            <TextInput source="name" />
            <NumberInput source="adultMembers" />
            <NumberInput source="childrenMembers" />
        </SimpleForm>
    </Edit>
);

export const FamilyCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <NumberInput source="adultMembers" />
            <NumberInput source="childrenMembers" />
        </SimpleForm>
    </Create>
);