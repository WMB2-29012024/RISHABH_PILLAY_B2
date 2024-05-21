import React from 'react';
import './Card.css';
const Card = ( props ) => {

    const {id,title,url} = props


    return (
        <div className="Card">

            <div className='card-head'>
                <div className='profile-photo'>
                <img src={url} alt="" />
                </div>
                <h1 className='profile-id'>{id}</h1>
            </div>
            <div className='card-body'>
                <p className='titel'>{title}</p>
            </div>






        </div>
    );
};

export default Card;
