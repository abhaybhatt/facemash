import React from 'react';
import SimpleMenu from './menu.js';
import './navbar.css';


const Navbar = () =>{
    return(
        <div className="top">
            <div className="menu">
                <SimpleMenu/>
            </div>
            
            <div className="head" >
                <div className="heading">Face Mash</div>      
            </div>
        </div>
        
        
    )
}

export default Navbar;