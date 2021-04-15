import { ADD_MESSAGE } from "./types";
import { DELETE_MESSAGE } from "./types";
import { FLASHING } from "./types";

/**
 * Messages state object
 * {
 *   messages: {
 *     12312323: [{id: 189418833, text: "Hi", author: "bot"}],
 *     23423423: [{id: 189418833, text: "What are your plans?", author: "user"}]
 *   }
 * }
 */

const initialState = {
    messages: {},
    flashing: false
}

export const chatBoxReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_MESSAGE: {
            const { chatId, text, author } = payload;
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [chatId]: [...(state.messages[chatId] || []),
                        { id: Math.floor(Math.random() * 1E8), text, author }]
                }
            };
        }
        case DELETE_MESSAGE: {
            const { chatId, id } = payload;
            const chatMessages = state.messages[chatId];
            const idx = chatMessages.findIndex(item => item.id === id);
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [chatId]: [...chatMessages.slice(0, idx), ...chatMessages.slice(idx + 1)]
                }
            };
        }
        case FLASHING: {
            return {
                ...state,
                flashing: !state.flashing
            };
        }
        default:
            return state;
    }
};