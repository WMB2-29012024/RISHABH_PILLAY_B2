import './card.css'
function Card(props) {

    const{key,index} = props

    return (
        <div className="Card">
            <h4>Card <span>{index}</span></h4>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Atque esse fugiat optio officiis asperiores soluta dolores adipisci dolor nemo sunt.
            </p>
        </div>
    );
}

export default Card;