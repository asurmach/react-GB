import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router-dom';
import ChatBox from './chat-box';

const ChatPage = () => {
    const chats = useSelector(state => state.chatList.chats);
    const { chatId } = useParams();

    const chatsWithSelectedId = chats.filter(chat => chat.id === Number(chatId)).length;
    const Element = (chatsWithSelectedId) ? <ChatBox /> : <Redirect to="/" />;

    return (
        <>
            { Element }
        </>
    );
}

export default ChatPage;