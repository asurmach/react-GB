import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserName as setUserNameAction } from '../store/profile-page/actions';
import { Link } from 'react-router-dom';
import {TextField, Button} from '@material-ui/core';

const ProfilePage = () => {
    const userName = useSelector(state => state.profilePage.userName);
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');

    const setUserName = (e) => {
        e.preventDefault();

        dispatch(setUserNameAction(inputValue));

        setInputValue('');
    }

    const changeText = (e) => setInputValue(e.target.value);

    return (
        <div className="chat__profile-page">
            <div className="chat__profile-page__title">Your name is {userName}</div>
            <form onSubmit={setUserName} className="chat__form">
                <TextField onChange={changeText} value={inputValue} label="Write your name..." size="small"/>
                <Button variant="contained" onClick={setUserName}>Set</Button>
            </form>
            <Link to="/" className="chat__profile-page__link">Main Page</Link>
        </div>
    );
}

export default ProfilePage;