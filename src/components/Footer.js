import React from 'react';
import imgFooter from '../assets/img/ac-footer.png'

const Footer = () => {
    return (
        <div className="footer">
            <img src={imgFooter} alt="" className='imgFooter'/>
            <h2>
    
            <a href="https://github.com/Boxtober/AnimalCrossing-Villagers" target='_blank'>See code !</a>
            </h2>
        </div>
    );
};

export default Footer;