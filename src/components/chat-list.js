import React from 'react';
import Chat from './chat';

const ChatList = ({ chats }) => {
    return chats ? chats.map(({ id, ...fields }) => <Chat key={ id } { ... fields } />) : null;
};

export default ChatList;