import React from 'react';

const Article = ({title, id, language, publisher, end_year}) => {
    return (
        <div className="chat__article">
            <a href={`https://chroniclingamerica.loc.gov/${id}`} className="chat__article__author">{title}</a>
            <div className="chat__article__text">
                <strong>Language:</strong> {language}. <strong>Publisher:</strong> {publisher} <strong>End year:</strong> {end_year}
            </div>
        </div>
    );
}

export default Article;