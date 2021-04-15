import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getArticles } from '../store/articles-page/actions';
import ArticlesList from '../components/articles-list';
import {TextField, Button} from '@material-ui/core';
import {history} from '../store';

const ArticlesPage = () => {
    const dispatch = useDispatch();
    const articles = useSelector((state) => state.articlesPage.articles);
    const { loading, error } = useSelector((state) => state.articlesPage.request);
    const [inputValue, setInputValue] = useState('');

    const searchArticles = (e) => {
        e.preventDefault();

        dispatch(getArticles(inputValue));
        setInputValue('');
    }

    const changeText = (e) => setInputValue(e.target.value);

    const onClickHandler = (e) => {
        e.preventDefault();

        history.push(e.target.getAttribute('href'));
    }

    let Element;

    if (loading) {
        Element = (<h4>Loading...</h4>);
    } else if (error) {
        Element = (<h4>Error! Sory, we have a problem with this request. Reload and try again.</h4>);
    } else {
        Element = (
            <>
                <form onSubmit={searchArticles} className="chat__form">
                    <TextField onChange={changeText} value={inputValue} label="Type a text..." size="small"/>
                    <Button variant="contained" onClick={searchArticles}>Search</Button>
                </form>
                <div className="chat__articles-page__search-results">
                    { articles.length ? <ArticlesList articles={articles}/> : <h4>No results</h4> }
                </div>
            </>
        );
    }

    return (
        <div className="chat__articles-page">
            <div className="chat__articles-page__title">Articles from CRONICLING AMERICA</div>
            {Element}
            <a href="/" className="chat__articles-page__link" onClick={onClickHandler}>Main Page</a>
        </div>
    );
}

export default ArticlesPage;