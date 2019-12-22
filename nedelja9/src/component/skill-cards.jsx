import React from 'react';
// import Flippy, { FrontSide, BackSide} from 'react-flippy'

const Cards = ({dataCard}) => {
    const {cardTitle, cardText} = dataCard
    // const addItem = () => {
    //     for (let i =0; i < 10; i++) {
    //             // let key = x.index[i]
    //             // console.log(key)
    //             // console.log(x.lenght())
    //             return i;
    //     }
    // }

    return (
    <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front">
            <h5>{cardTitle}</h5>
            </div>
            <div className="flip-card-back">
            {cardText}
            </div>
        </div>
    </div>
    )
}

export default Cards;