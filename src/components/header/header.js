import React from "react";
import './header.css';

function Header(){
    return(
        <header className="app-header">
            <img className="app--img" src="/logo_header_pink.jpg" alt="logo_pink"></img> 
            <div className="app--div">
                <h1>Luna Mágica</h1>
                <h2>- ASTROLOGIA, TAROT Y OTRAS POSIONES -</h2>
            </div>           
        </header>
    )
}
export default Header;