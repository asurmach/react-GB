import React from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';

const Header = ({ text }) => {
    const userName = useSelector(state => state.profilePage.userName);

    return (
        <div className="chat__header">
            <div>{text}</div>
            <div className="chat__header__user">User: {userName}</div>
            <Link to="/profile" className="chat__header__link">Profile</Link>
        </div>
    );
}

export default Header;