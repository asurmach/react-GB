import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MessageList from './message-list';
import {AUTHORS} from '../utils/constants';
import { TextField, Button, Icon, List } from '@material-ui/core';

const BOT_MESSAGES = ['How are you?', 'Hi', 'Bye', 'What are you doing?', 'What are your plans?', 'I cant do this anymore'];
const BOT_DELAY = 600;

/**
 * Messages object
 * {
 *   12312323: [{id: 189418833, text: "Hi", author: "bot"}],
 *   23423423: [{id: 189418833, text: "What are your plans?", author: "user"}]
 * }
 */

const ChatBox = ({ messages, setMessages }) => {
    const [inputValue, setInputValue] = useState('');
    const { chatId } = useParams();

    const {BOT: authorBot, USER: authorUser} = AUTHORS;

    useEffect(() => {
        const chatMessages = messages[chatId];
        if (chatMessages && chatMessages[chatMessages.length - 1]?.author === 'bot') return;
        const timeout = setTimeout(() => addBotMessage(), BOT_DELAY);
        return () => clearTimeout(timeout);
    }, [messages, chatId]);

    const addBotMessage = () => {
        addMessage(BOT_MESSAGES[Math.floor(Math.random() * BOT_MESSAGES.length)], authorBot);
    }

    const addUserMessage = (e) => {
        e.preventDefault();
        addMessage(inputValue, authorUser);
        setInputValue('');
    }

    const addMessage = (text, author) => {
        setMessages((prevState) => {
            const nextState = Object.assign({}, prevState);

            if (!nextState[chatId]) nextState[chatId] = [];

            nextState[chatId].push({
                id: Math.floor(Math.random() * 1E9),
                text: text,
                author: author
            });
            return nextState;
        });
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