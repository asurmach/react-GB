import React from 'react';

const Message = (props) => {
    return (
        <div>{props.author} : {props.text}
            <div>-----------------------------</div>
        </div>
    );
}

export default Message;