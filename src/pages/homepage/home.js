import React from "react";
import { useState, useEffect } from "react";
import Zodiac from '../../components/main/main';
import Header from "../../components/header/header";
import Cards from '../../components/tarot/cards';
import './home.css';


function Home(){
    const [section, setSection]= useState(false)
    const [home, setHome] = useState(false)
    const [start, setStart]= useState(true);

    function toggleDisplay(){
        setSection( prevSection =>!prevSection)
    }
    function toggleHome(){
        setHome( prevHome =>!prevHome)
        setSection( prevSection =>!prevSection)
        setStart( prevStart =>!prevStart)
    }
    function toggle(){
        setHome( prevHome =>!prevHome)
    }
    useEffect(()=>{
        setStart(start)
    }, [start])
  
    return (
        <section>
            <Header/>
            <button onClick={toggle} className="btn btn-outline-secondary home--btn">GET YOUR ZODIAC SIGN AND MORE</button>
            {home &&<Zodiac handleClick={toggleDisplay}/>}
            {section && <Cards handleClick ={toggleHome}/>}
        </section>
    )
};

export default Home;