import './ListContainer.css';
import Card from '../Card/Card';
import { useState } from 'react';

function ListContainer() {

    const [cardList, setCardList] = useState([]);

    const addCardHandler = () => {
        cardList.push({ ID: Math.floor(Math.random() * 1000) + 1 })
        setCardList([...cardList]);
    };

    const cardDeleter = (ID) => {
        const deleterCardList = cardList.filter(card => card.ID !== ID);
        setCardList(deleterCardList);
    };

    // const cardDeleter = (ID) => {
    //     const deleterElementIndex = cardList.findIndex((card) => card.ID === ID);
    //     cardList.splice(deleterElementIndex, 1);
    //     setCardList([...cardList]);
    // };


    return (
        <div className="ListContainer">
            {cardList.map((card) => <Card key = {card.ID} ID={card.ID} cardDeleter={cardDeleter} />)}
            <button onClick={addCardHandler}>+</button>
        </div>
    );
}

export default ListContainer;