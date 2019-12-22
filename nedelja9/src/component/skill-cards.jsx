import React from 'react';

const Cards = ({dataCard}) => {

    return (
        <div className="cards">
            <h5>{dataCard.cardTitle}</h5>
            <p className="card-text">{dataCard.cardText}</p>
        </div>
    )
}

export default Cards;