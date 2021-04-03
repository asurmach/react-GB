import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './header';
import Overlay from './overlay';
import ChatBox from './chat-box';
import ChatList from './chat-list';
import '../styles/styles.scss';

const defaultChats = [{ id: 1738192, name: 'Bots chat' },
    { id: 4564665, name: 'Friends' },
    { id: 4564564, name: 'Colleagues' },
    { id: 6787979, name: 'Family' },
    { id: 3543455, name: 'Сlassmates' }];

const App = () => {
    const [messages, setMessages] = useState({});
    const [chats, setChats] = useState(defaultChats);

    return (
        <Router>
            <div className="chat">
                <Header text="React Chat App"/>
                <Switch>
                    <Route exact path="/">
                        <Overlay />
                        <ChatList chats={chats} setChats={setChats}/>
                    </Route>
                    <Route path="/profile">
                        <Overlay text="Profile" />
                        <ChatList chats={chats} setChats={setChats}/>
                    </Route>
                    <Route path="/chat-:chatId" render={ ({ match }) => {
                        const chatsWithSelectedId = chats.filter(chat => chat.id === Number(match.params.chatId)).length;
                        const Element = (chatsWithSelectedId) ? <ChatBox messages={messages} setMessages={setMessages}/> : <Redirect to="/" />;
                        return (
                            <>
                                {Element}
                                <ChatList chats={chats} setChats={setChats}/>
                            </>
                        );
                    }} />
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    );
}

export default App;