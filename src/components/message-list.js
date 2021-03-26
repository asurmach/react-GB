import React from 'react';
import Message from './message';

const MessageList = ({ messages }) => {
    return messages ? messages.map(({ id, ...fields }) => <Message key={ id } { ... fields } />) : null;
};

export default MessageList;