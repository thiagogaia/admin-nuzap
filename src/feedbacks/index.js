import { Datagrid, DateField, List, TextField, Create, SimpleForm, TextInput, Edit, ImageField } from 'react-admin';

export const FeedbackList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="message" />
            <ImageField source="imgurl" title="message" width="50px" height="50px" />
            <TextField source="type" />
            <DateField source="created_at" />
        </Datagrid>
    </List>
);

export const FeedbackCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="message" name="comment" />
            <TextInput source="screenshot" />
            <TextInput source="type" />        
        </SimpleForm>
    </Create>
);

export const FeedbackEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="message" name="comment" />
            <TextInput source="type" />        
        </SimpleForm>
    </Edit>
);