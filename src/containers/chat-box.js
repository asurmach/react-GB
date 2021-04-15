import React, {useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMessage as addMessageAction, addBotMessage as addBotMessageAction } from '../store/chat-box/actions';
import { useParams } from 'react-router-dom';
import MessageList from '../components/message-list';
import { AUTHORS } from '../utils/constants';
import { TextField, Button, Icon } from '@material-ui/core';



const ChatBox = () => {
    const dispatch = useDispatch();
    const messages = useSelector(state => state.chatBox.messages);
    const [inputValue, setInputValue] = useState('');
    const { chatId } = useParams();

    // First message from bot in chat
    useEffect(() => {
        addBotMessage();
    }, [chatId]);

    const addBotMessage = () => {
        dispatch(addBotMessageAction(chatId));
    }

    const addUserMessage = (e) => {
        e.preventDefault();

        if (!inputValue) return;

        addMessage(inputValue, AUTHORS.USER);
        addBotMessage();
        setInputValue('');
    }

    const addMessage = (text, author) => {
        dispatch(addMessageAction(chatId, text, author));
    }

    const changeText = (e) => setInputValue(e.target.value);

    return (
        <div className="chat__box">
            <div className="chat__message-list">
                <MessageList messages={messages[chatId]}/>
            </div>
            <form onSubmit={addUserMessage} className="chat__form">
                <TextField onChange={changeText} value={inputValue} label="Type the text..." variant="outlined" size="small" style={{ width:'100%' }}/>
                <Button variant="contained" endIcon={<Icon>send</Icon>} onClick={addUserMessage}>Send</Button>
            </form>
        </div>
    );
}

export default ChatBox;