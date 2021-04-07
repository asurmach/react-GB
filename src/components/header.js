import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ text }) => {
    return (
        <div className="chat__header">
            <div>{text}</div>
            <Link to="/profile" className="chat__header__link">Profile</Link>
        </div>
    );
}

export default Header;