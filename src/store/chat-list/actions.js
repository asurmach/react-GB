import { ADD_CHAT } from "./types";
import { DELETE_CHAT } from "./types";

export const addChat = (name) => ({
    type: ADD_CHAT,
    payload: name,
});

export const deleteChat = (chatId) => ({
    type: DELETE_CHAT,
    payload: chatId,
});