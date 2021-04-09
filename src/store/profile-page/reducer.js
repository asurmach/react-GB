import { SET_NAME } from "./types";

const initialState = {
    userName: 'unknown'
};

export const profilePageReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_NAME: {
            return {
                ...state,
                userName: payload,
            };
        }
        default:
            return state;
    }
};