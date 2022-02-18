import * as React from "react";
import { List, Datagrid, TextField, EditButton, NumberField, NumberInput, Edit, SimpleForm, TextInput, Create, DateField, DateInput } from 'react-admin';

export const EventList = props => (
    <List {...props} pagination={false} perPage={1000}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <DateField source="date" options={{ timeZone: 'UTC' }} />
            <NumberField source="initialTime" />
            <NumberField source="endTime" />
            <NumberField source="guests" />
            <EditButton />
        </Datagrid>
    </List>
);

export const EventEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <TextField source="id" />
            <TextInput source="name" />
            <DateInput source="date" />
            <NumberInput source="initialTime" />
            <NumberInput source="endTime" />
            <NumberInput source="guests" />
        </SimpleForm>
    </Edit>
);

export const EventCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <DateInput source="date"  />
            <NumberInput source="initialTime" />
            <NumberInput source="endTime" />
            <NumberInput source="guests" />
        </SimpleForm>
    </Create>
);