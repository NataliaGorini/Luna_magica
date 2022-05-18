import React from "react";
import {useState, useEffect} from 'react';
import zodiac from '../data/zodiac';
import getSigns from "./signs/signs";

function Form(){
 const [fecha, setFecha] = useState([]);
 
    const birthDate = (ev) =>{
        let day = ev.target.value.split("-")[2];
        let mon = ev.target.value.split("-")[1];
        let date = '1980-' + mon + '-' + day;
        setFecha(date);
    }
    const handleSubmit = (ev) =>{
        ev.preventDefault();
        getSigns(fecha);
    }
    return(
        <form onSubmit={handleSubmit}> 
            <div className="mb-3">
                <label htmlFor="name-form" className="form-label">Nombre completo</label>
                <input type="text" className="form-control" id="name-form" name="nombre" />
            </div>
            <div className="mb-3">
                <label htmlFor="age-form" className="form-label">Edad</label>
                <input type="number" className="form-control" id="age-form" name="edad" />
            </div>
            <div className="mb-3 form-check">
                <label htmlFor="exampleDataList" className="form-label">Género</label>
                <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Seleccione su género..." name="genero" />
                <datalist id="datalistOptions">
                    <option value="Feminino"/>
                    <option value="Masculino"/>
                    <option value="No Binario"/>
                </datalist>
            </div>
            <div className="mb-3">
                <label htmlFor="birth-form" className="form-label">Fecha de Nacimiento</label>
                <input type="date" className="form-control" id="birth-form" min="1910-01-01" max= "2021-12-31" name="nacimiento" onChange={birthDate} />
            </div>
            <button type="submit" className="btn btn-primary">Get Horoscope</button>
        </form>
    );
}
export default Form;