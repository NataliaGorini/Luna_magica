import React from "react";
import { useState, useEffect } from "react";
import Form from '../../components/form.js';
import Header from "../../components/header/header.js";

function Home(){
    const [input, setinput] = useState('');
    return (
        <section>
            <Header/>
            <Form/>
        </section>
    )
};

export default Home;