import React from 'react';
import Message from './message';

const MessageList = ({ messages }) => {
    return messages.map(message => <Message { ... message } />);
};

export default MessageList;