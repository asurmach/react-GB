import React from 'react';
import {useSelector} from 'react-redux';
import {history} from '../store';

const Header = ({ text }) => {
    const userName = useSelector(state => state.profilePage.userName);

    const onClickHandler = (e) => {
        e?.preventDefault();

        history.push(e.target.getAttribute('href'));
    }

    return (
        <div className="chat__header">
            <div>{text}</div>
            <div className="chat__header__user">User: {userName}</div>
            <a href="/profile" className="chat__header__link" onClick={onClickHandler}>Profile</a>
        </div>
    );
}

export default Header;