import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ListItem, ListItemAvatar, Avatar, ListItemText, makeStyles } from '@material-ui/core';
import { Chat as ChatIcon } from '@material-ui/icons';

const useStyles = makeStyles(() => ({
    green: {
        backgroundColor: '#2BAB99'
    }
}));

const Chat = ({id, name}) => {
    const { chatId } = useParams();
    const classes = useStyles();

    const isActive = Number(chatId) === id;

    return (
        <ListItem button>
            <ListItemAvatar>
                <Avatar className={isActive ? classes.green : ''}>
                    <ChatIcon />
                </Avatar>
            </ListItemAvatar>
            <Link to={`/chat-${id}`} className="chat__chats-list__link">
                <ListItemText primary={name} />
            </Link>
        </ListItem>
    );
}

export default Chat;