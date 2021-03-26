import React, { useState, useEffect } from 'react';
import MessageList from './message-list';
import Button from './button';
import Input from './input';
import { AUTHORS } from '../utils/constants';

const BOT_MESSAGES = ['Как дела?', 'Привет', 'Пока', 'Что сейчас делаешь?', 'Какие планы?', 'Я больше так не могу'];

const App = () => {
    const [messagesState, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [lastMessageAuthor, setAuthor] = useState(null);

    const { BOT: authorBot, USER: authorUser }  = AUTHORS;

    useEffect(() => {
        if (lastMessageAuthor === 'Бот') return;
        addBotMessage();
    }, [messagesState]);

    const addBotMessage = () => {
        addMessage(BOT_MESSAGES[Math.floor(Math.random() * 6)], authorBot);
        setAuthor(authorBot);
    }

    const addUserMessage = () => {
        addMessage(inputValue, authorUser);
        setInputValue('');
        setAuthor(authorUser);
    }

    const addMessage = (text, author) => {
        setMessages((prevState) => {
            return [...prevState,
                { id: Math.floor(Math.random() * 1E9), text: text , author: author }];
        });
    }

    const changeText = (e) => setInputValue(e.target.value);

    return <React.Fragment>
        <MessageList messages={ messagesState } />
        <Input onChange={ changeText } value={ inputValue } placeholder="Введите текст..."/>
        <Button onClick={ addUserMessage } />
    </React.Fragment>;
}

export default App;