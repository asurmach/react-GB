import { SET_NAME } from "./types";

export const setUserName = (name) => ({
    type: SET_NAME,
    payload: name,
});