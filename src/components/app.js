import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor, history } from '../store';
import Header from './header';
import Overlay from './overlay';
import ChatPage from '../containers/chat-page';
import ChatList from '../containers/chat-list';
import ProfilePage from '../containers/profile-page';
import ArticlesPage from '../containers/articles-page';
import '../styles/styles.scss';

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ConnectedRouter history={history}>
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
                            <Route path="/articles">
                                <ArticlesPage />
                                <ChatList />
                            </Route>
                            <Route path="/chat-:chatId">
                                <ChatPage />
                                <ChatList />
                            </Route>
                            <Redirect to="/" />
                        </Switch>
                    </div>
                </ConnectedRouter>
            </PersistGate>
        </Provider>
    );
}

export default App;