import React from 'react';
import './sign.css';
export default function Sign(props){

    return(     
        <div className="sign--container">
            <h3 className="sign--h3">{props.name}</h3>
            <img className="sign--img" src={props.image}/>
            <h4 className="sign--h4"><span>Element: </span>{props.element}</h4>
            <h4 className="sign--h4"><span>Regent: </span>{props.regent}</h4>
            <h4 className="sign--h4"><span>Color: </span>{props.color}</h4>
            <p className="text-sm-start sign--p">{props.qualities}</p>
            <div className="sign--div">
                <p className="text-sm-start"><span>Health: </span>{props.prediction.health}</p>
                <p className="text-sm-start"><span>Money: </span>{props.prediction.money}</p>
                <p className="text-sm-start"><span>Love: </span>{props.prediction.love}</p>
            </div>
            <button className="btn btn-outline-secondary sign--btn" onClick={props.handleClick}>GET CARDS</button>
        </div>
    )   
}