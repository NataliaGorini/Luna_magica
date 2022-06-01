import React from "react";
import {useState, useEffect} from 'react';
import getSign from '../../services/getsign';
import Sign from '../signs/sign';
import './main.css'

function Zodiac(props){
 const [form, setForm] = useState([]);
 const [zodiacSign, setZodiacSign]= useState([]);

    const birthDate = (ev) =>{
        ev.preventDefault();
        let day = ev.target.value.split("-")[2];
        let mon = ev.target.value.split("-")[1];
        let date = '1980-' + mon + '-' + day;
        setForm(date);
    }
    const handleSubmit=(ev)=>{
        ev.preventDefault();
        const sign = getSign(form) 
        setZodiacSign(sign) 
    }
   
    useEffect(()=>{
        setZodiacSign(zodiacSign)
    }, [zodiacSign])

    return(
        <main>
            <form className="form--container"> 
                <div className="input-group-sm form--div">
                    <label htmlFor="name-form" className="form-label label">Full Name </label>
                    <input type="text" className="form-control form--input" id="name-form" name="nombre" />
                </div>
                <div className="input-group-sm form--div">
                    <label htmlFor="age-form" className="form-label label">Age</label>
                    <input type="number" className="form-control form--input" id="age-form" name="edad" />
                </div>
                <div className="input-group-sm form--div">
                <label htmlFor="gender" className="form-label label">Gender</label>
                    <select className="form-select form-select-sm form--input" id="gender" aria-label=".form-select-sm example">
                        <option value="1">Female</option>
                        <option value="2">Male</option>
                        <option value="3">No Binary</option>
                    </select>
                </div>
                <div className="input-group-sm form--div">
                    <label htmlFor="birth-form" className="form-label label">Birthday</label>
                    <input type="date" className="form-control form--input" id="birth-form" min="1910-01-01" max= "2021-12-31" name="nacimiento" onChange={birthDate} />
                </div>
                <button type="submit" className="btn btn-outline-secondary form--btn" onClick={handleSubmit}>Get Horoscope</button>
            </form>
            {zodiacSign.map(item =>
                    <Sign 
                        key={item.name} 
                        handleClick ={props.handleClick}
                        {...item}
                    />)
            }
        </main>
    );
}
export default Zodiac;