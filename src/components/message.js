import React from 'react';

const Message = ({author, text}) => {
    return (
        <div className={`chat__message chat__message_${author}`}>
            <div className="chat__message__author">{author}</div>
            <div className="chat__message__text">{text}</div>
        </div>
    );
}

export default Message;