import { ADD_CHAT } from "./types";

const initialState = {
    chats: [{ id: 1738192, name: 'Bots chat' },
        { id: 4564665, name: 'Friends' },
        { id: 4564564, name: 'Colleagues' },
        { id: 6787979, name: 'Family' },
        { id: 3543455, name: 'Сlassmates' }]
};

export const chatListReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_CHAT: {
            return {
                ...state,
                chats: [
                    ...state.chats,
                    { id: Math.floor(Math.random() * 1E8), name: payload },
                ],
            };
        }
        default:
            return state;
    }
};