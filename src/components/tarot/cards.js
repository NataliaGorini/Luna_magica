import React from 'react';
import { useState, useEffect } from "react";
import getTarot from '../../services/getTarot';
import Card from './card';
import './cards.css';

export default function Cards (props){
  const [cards, setCards]= useState([]);
  
  useEffect(function(){
      getTarot().then(cards => setCards(cards))
  }, [])

    return(
        <section className="cards--section">
            <div className="cards--container">
                {cards.length &&
                    cards.map(singleCard => {
                        return(
                        <Card 
                                key={singleCard.name_short} 
                                {...singleCard}
                        />
                        )
                    })
                }
            </div>
            <button className="btn btn-outline-secondary cards--btn" onClick={props.handleClick}>Back Home</button>
        </section>
    )
}
