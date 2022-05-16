import React from "react";

function Form(){
    return(
        <form>
            <div className="mb-3">
                <label for="name-form" className="form-label">Nombre completo</label>
                <input type="text" className="form-control" id="name-form" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label for="age-form" className="form-label">Edad</label>
                <input type="number" className="form-control" id="age-form"/>
            </div>
            <div className="mb-3 form-check">
                <label for="exampleDataList" className="form-label">Género</label>
                <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="Seleccione su género..."/>
                <datalist id="datalistOptions">
                    <option value="Feminino"/>
                    <option value="Masculino"/>
                    <option value="No Binario"/>
                </datalist>
            </div>
            <div className="mb-3">
                <label for="birth-form" className="form-label">Fecha de Nacimiento</label>
                <input type="date" className="form-control" id="birth-form" min="1910-01-01" max= "2021-12-31"/>
            </div>
            <button type="submit" className="btn btn-primary">Get Horoscope</button>
        </form>
    );
}
export default Form;