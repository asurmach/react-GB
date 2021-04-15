import React from 'react';
import Article from './article';

const ArticlesList = ({ articles }) => {
    return articles ? articles.map(({ lccn, ...fields }) => <Article key={ lccn } { ... fields } />) : null;
};

export default ArticlesList;