import axios from 'axios';
import { GET_ARTICLES_REQUEST, GET_ARTICLES_SUCCESS, GET_ARTICLES_FAILURE } from "./types";

const getArticlesRequest = () => ({
    type: GET_ARTICLES_REQUEST,
});

const getArticlesSuccess = (articles) => ({
    type: GET_ARTICLES_SUCCESS,
    articles
});

const getArticlesFailure = (err) => ({
    type: GET_ARTICLES_FAILURE,
    error: err,
});

export const getArticles = (term) => async (dispatch) => {
    try {
        dispatch(getArticlesRequest());
        const res = await axios.get(`https://chroniclingamerica.loc.gov/search/titles/results/?terms=${term}&format=json`);

        dispatch(getArticlesSuccess(res.data.items));
    } catch (err) {
        dispatch(getArticlesFailure(err));
    }
}