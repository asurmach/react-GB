import React, { useState } from 'react';
import Chat from './chat';
import { TextField, Fab, List } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const ChatList = ({ chats, setChats }) => {
    const [inputValue, setInputValue] = useState('');

    const addChat = (e) => {
        e.preventDefault();

        setChats((prevState) => {
            return [...prevState,
                {id: Math.floor(Math.random() * 1E8), name: inputValue}];
        });

        setInputValue('');
    }

    const changeText = (e) => setInputValue(e.target.value);

    return (
        <div className="chat__chats-list">
            <List component="nav" aria-label="main mailbox folders">
                { chats ? chats.map(({ id, ...fields }) => <Chat key={ id } id={ id } { ... fields } />) : null }
            </List>
            <form onSubmit={addChat} className="chat__form">
                <TextField onChange={changeText} value={inputValue} label="Write a chat name..." size="small"/>
                <Fab aria-label="add" onClick={addChat} size="small" style={{ marginTop:'10px' }}>
                    <AddIcon />
                </Fab>
            </form>
        </div>
    );
};

export default ChatList;