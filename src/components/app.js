import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store';
import Header from './header';
import Overlay from './overlay';
import ChatPage from '../containers/chat-page';
import ChatList from '../containers/chat-list';
import ProfilePage from '../containers/profile-page';
import '../styles/styles.scss';

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <div className="chat">
                    <Header text="React Chat App"/>
                    <Switch>
                        <Route exact path="/">
                            <Overlay />
                            <ChatList />
                        </Route>
                        <Route path="/profile">
                            <ProfilePage />
                            <ChatList />
                        </Route>
                        <Route path="/chat-:chatId">
                            <ChatPage />
                            <ChatList />
                        </Route>
                        <Redirect to="/" />
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}

export default App;