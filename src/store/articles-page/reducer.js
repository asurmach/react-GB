import { GET_ARTICLES_REQUEST, GET_ARTICLES_SUCCESS, GET_ARTICLES_FAILURE } from "./types"

const initialState = {
    articles: [],
    request: {
        loading: false,
        error: null,
    }
}


export const articlesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ARTICLES_REQUEST: {
            return {
                ...state,
                request: {
                    error: null,
                    loading: true,
                },
            };
        }
        case GET_ARTICLES_SUCCESS: {
            return {
                ...state,
                articles: action.articles,
                request: {
                    error: null,
                    loading: false,
                },
            };
        }
        case GET_ARTICLES_FAILURE: {
            return {
                ...state,
                request: {
                    error: action.error,
                    loading: false,
                },
            };
        }
        default:
            return state;
    }
}