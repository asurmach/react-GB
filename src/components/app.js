import React, {useState} from 'react';
import MessageList from './message-list';
import Button from './button';
import Input from './input';

const messages = [
    {key: 1, text: 'Привет'},
    {key: 2, text: 'Как дела?'},
    {key: 3, text: 'Нормально'}
];

const App = () => {
    const [messagesState, setMessages] = useState(messages);
    const [inputValue, setInputValue] = useState('');

    const changeMessages = () => {
        setMessages((state) => {
            return [...state,
            { key: state[state.length - 1].key + 1, text: inputValue }];
        });
        setInputValue('');
    }

    const changeText = (e) => setInputValue(e.target.value);

    return <React.Fragment>
        <MessageList messages={ messagesState } />
        <Input onChange={ changeText } value={ inputValue } placeholder="Введите текст..."/>
        <Button onClick={ changeMessages } />
    </React.Fragment>;
}

export default App;