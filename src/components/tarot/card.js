import React from 'react';
import "./card.css"
export default function Card(props){
    return(
        <div className="card--container">
            <h3 className="card--h3">{props.name}</h3>
            <img className="card--img" src={`https://sacred-texts.com/tarot/pkt/img/${props.name_short}.jpg`} alt={`tarot card ${props.name_short}`}/>
            <h4>Description</h4>
            <p className="text-sm-start card--p">{props.desc}</p>
            <h4>Meaning Up:</h4>
            <p className="text-sm-start card--p">{props.meaning_up}</p>
            <h4>Meaning Rev:</h4>
            <p className="text-sm-start card--p">{props.meaning_rev}</p>
        </div>
    )
}