import React from 'react';
import Message from '../containers/message';

const MessageList = ({ messages }) => {
    return messages ? messages.map(({ id, ...fields }) => <Message key={ id } id={ id } { ... fields } />) : null;
};

export default MessageList;