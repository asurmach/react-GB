import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import { deleteMessage as deleteMessageAction } from '../store/chat-box/actions';

const Message = ({id, author, text}) => {
    const dispatch = useDispatch();
    const { chatId } = useParams();

    const deleteMessage = () => dispatch(deleteMessageAction(chatId, id));

    return (
        <div className={`chat__message chat__message_${author}`}>
            <div className="chat__message__wrap">
                <div className="chat__message__author">{author}</div>
                <DeleteIcon style={{ fontSize: 15, cursor: 'pointer' }} onClick={deleteMessage}/>
            </div>
            <div className="chat__message__text">{text}</div>
        </div>
    );
}

export default Message;