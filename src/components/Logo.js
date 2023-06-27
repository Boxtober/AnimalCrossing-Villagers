import React from 'react';
import logo from '../assets/img/animal-crossing-logo.png'

const Logo = () => {
    return (
        <div className="logo">
            <img src={logo} alt="" />
            <h3>Villagers List</h3>
        </div>
    );
};

export default Logo;