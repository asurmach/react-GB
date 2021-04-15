import React from 'react';
import { useParams } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import { deleteChat as deleteChatAction } from '../store/chat-list/actions';
import { ListItem, ListItemAvatar, Avatar, ListItemText, makeStyles } from '@material-ui/core';
import { Chat as ChatIcon } from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';
import { history } from '../store';

const useStyles = makeStyles(() => ({
    green: {
        backgroundColor: '#2BAB99'
    },
    red: {
        backgroundColor: 'red'
    }
}));

const Chat = ({id, name}) => {
    const dispatch = useDispatch();
    const isFlashing = useSelector(state => state.chatBox.flashing);
    const { chatId } = useParams();
    const classes = useStyles();

    const isActive = Number(chatId) === id;

    const onClickHandler = (e) => {
        e?.preventDefault();

        history.push(`/chat-${id}`);
    }

    const deleteChat = () => dispatch(deleteChatAction(id));

    return (
        <ListItem button>
            <a href={`/chat-${id}`} className="chat__chats-list__link" onClick={onClickHandler}>
                <ListItemAvatar>
                    <Avatar className={isFlashing && isActive ? classes.red : isActive ? classes.green : ''}>
                        <ChatIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={name} />
            </a>
            <DeleteIcon onClick={deleteChat} style={{ marginLeft: '10px' }}/>
        </ListItem>
    );
}

export default Chat;