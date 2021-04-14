import { ADD_MESSAGE } from "./types";
import { DELETE_MESSAGE } from "./types";
import { FLASHING } from "./types";
import { AUTHORS } from '../../utils/constants';

const BOT_MESSAGES = ['How are you?', 'Hi', 'Bye', 'What are you doing?', 'What are your plans?', 'I cant do this anymore'];
const BOT_DELAY = 600;
let timer;

export const addMessage = (chatId, text, author) => ({
    type: ADD_MESSAGE,
    payload: {
        chatId,
        text,
        author
    }
});

export const addBotMessage = (chatId) => (dispatch, getState) => {
    const chatMessages = getState().chatBox.messages[chatId];
    if (chatMessages && chatMessages[chatMessages.length - 1]?.author === 'bot') return;

    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
        dispatch(addMessage(chatId, BOT_MESSAGES[Math.floor(Math.random() * BOT_MESSAGES.length)], AUTHORS.BOT));
        dispatch(setFlashing());

        setTimeout(() => dispatch(setFlashing()), 1000);
    }, BOT_DELAY);
}

export const deleteMessage = (chatId, id) => ({
    type: DELETE_MESSAGE,
    payload: {
        chatId,
        id
    }
});

export const setFlashing = (chatId) => ({
    type: FLASHING
});