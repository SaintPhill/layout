import React from 'react'

const Messages = () => {
    const messages = ['Первое', "Второе", "Третье", "Четвертое"]
    return (
        <ul>
            {messages.map((message, id) => <li key={id}>{message} сообщение</li>)}
        </ul>
    )
};

export default Messages