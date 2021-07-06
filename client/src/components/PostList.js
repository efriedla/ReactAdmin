import React from 'react';
import { List,
Datagrid,
DateField,
TextField,
EditButton,
TextInput,
DateInput,
DeleteButton
} from 'react-admin';

const PostList = (props) => {
    return (
        <List {...props}>
        <Datagrid>
           <TextField source="id" />
           <TextField source="title" />
           <DateField source="publishDate" />
           <EditButton basePath='/posts' />
           <DeleteButton basePath='/posts' />
        </Datagrid>


        </List>
    )
}

export default PostList
