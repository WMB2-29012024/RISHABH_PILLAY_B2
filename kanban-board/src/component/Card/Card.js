import React from 'react';
import './Card.css';

function Card({ ID, cardDeleter }) {

    const deleteHandler = () => {
        cardDeleter(ID);
    };

    return (
        <div className="Card">
            <form action="">
                <input type="text" />
                <input type="text" />
                <button type='submit'></button>
            </form>
            <button onClick={deleteHandler}>X</button>
        </div>
    );
}

export default Card;