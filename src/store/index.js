import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';
import { chatBoxReducer } from "./chat-box/reducer";
import { chatListReducer } from "./chat-list/reducer";
import { profilePageReducer } from './profile-page/reducer';

const innitialStore = {};

const persistConfig = {
    key: 'gb-react-chat',
    storage,
    stateReconciler: autoMergeLevel2
}

export const history = createBrowserHistory();

const persistedReducer = persistReducer(
    persistConfig,
    combineReducers({
        router: connectRouter(history),
        chatBox: chatBoxReducer,
        chatList: chatListReducer,
        profilePage: profilePageReducer
    })
);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    persistedReducer,
    innitialStore,
    composeEnhancers(
        applyMiddleware(
            routerMiddleware(history), // for dispatching history actions
            thunk
        )
    )
);

export const persistor = persistStore(store);