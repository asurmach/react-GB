import { ADD_MESSAGE } from "./types";

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
    messages: {}
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
        default:
            return state;
    }
};