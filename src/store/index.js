import { createStore, combineReducers } from "redux";
import { chatBoxReducer } from "./chat-box/reducer";
import { chatListReducer } from "./chat-list/reducer";
import { profilePageReducer } from './profile-page/reducer';

export const store = createStore(
    combineReducers({
        chatBox: chatBoxReducer,
        chatList: chatListReducer,
        profilePage: profilePageReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);