import React from 'react';
import { ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core';
import { Chat as ChatIcon } from '@material-ui/icons';

const Chat = ({name}) => {
    return (
        <ListItem button>
            <ListItemAvatar>
                <Avatar>
                    <ChatIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={name} />
        </ListItem>
    );
}

export default Chat;