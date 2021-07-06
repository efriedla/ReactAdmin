import React from 'react';
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin';


const PostEdit = (props) => {
    return (
        <Edit title="Edit a post" {...props} >
            <SimpleForm>
                <TextInput disabled source="id" />
                <TextInput source="title" />
                <TextInput multiLine source="body" />
                <DateInput label="Published" source="publishDate" />
            </SimpleForm>

        </Edit>
    )
}

export default PostEdit