import React, {useState, useEffect} from 'react';
import Header from './header';
import MessageList from './message-list';
import ChatList from './chat-list';
import {AUTHORS} from '../utils/constants';
import { TextField, Button, Icon, List } from '@material-ui/core';
import '../styles/styles.scss';

const chats = [{ id: 1738192, name: 'Чат ботов' },
    { id: 4564665, name: 'Друзья' },
    { id: 4564564, name: 'Коллеги' },
    { id: 6787979, name: 'Семейный чат' },
    { id: 3543455, name: 'Одногруппники' }];

const BOT_MESSAGES = ['Как дела?', 'Привет', 'Пока', 'Что сейчас делаешь?', 'Какие планы?', 'Я больше так не могу'];
const BOT_DELAY = 600;


const App = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const {BOT: authorBot, USER: authorUser} = AUTHORS;

    useEffect(() => {
        if (messages[messages.length - 1]?.author === 'bot') return;

        const timeout = setTimeout(addBotMessage, BOT_DELAY);
        return () => clearTimeout(timeout);
    }, [messages]);

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
            return [...prevState,
                {id: Math.floor(Math.random() * 1E9), text: text, author: author}];
        });
    }

    const changeText = (e) => setInputValue(e.target.value);

    return (
        <div className="chat">
            <Header text="React Chat App"/>
            <div className="chat__box">
                <div className="chat__message-list">
                    <MessageList messages={messages}/>
                </div>
                <form onSubmit={addUserMessage} className="chat__form">
                    <TextField onChange={changeText} value={inputValue} label="Введите текст..." variant="outlined" size="small"/>
                    <Button variant="contained" color="primary" endIcon={<Icon>send</Icon>} onClick={addUserMessage}>Отправить</Button>
                </form>
            </div>
            <div className="chat__chats-list">
                <List component="nav" aria-label="main mailbox folders">
                    <ChatList chats={chats}/>
                </List>
            </div>
        </div>
    );
}

export default App;