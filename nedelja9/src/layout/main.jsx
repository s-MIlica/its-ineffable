import React from 'react';
import Cards from '../component/skill-cards';

const Main = ({data}) => {
    return (
        <main id="main">
            {data.map(x => ( <Cards dataCard={x} key={x.cardText}/> ))}
        </main>
    )
}

export default Main;