import React from 'react';

const Overlay = ({ text }) => {
    return <div className="chat__overlay">{text ? text : 'Select chat to start'}</div>;
}

export default Overlay;