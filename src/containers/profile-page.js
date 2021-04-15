import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setUserName as setUserNameAction } from '../store/profile-page/actions';
import {TextField, Button} from '@material-ui/core';
import {history} from '../store';

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

    const onClickHandler = (e) => {
        e?.preventDefault();

        history.push(e.target.getAttribute('href'));
    }

    return (
        <div className="chat__profile-page">
            <div className="chat__profile-page__title">Your name is {userName}</div>
            <form onSubmit={setUserName} className="chat__form">
                <TextField onChange={changeText} value={inputValue} label="Write your name..." size="small"/>
                <Button variant="contained" onClick={setUserName}>Set</Button>
            </form>
            <a href="/" className="chat__profile-page__link" onClick={onClickHandler}>Main Page</a>
        </div>
    );
}

export default ProfilePage;