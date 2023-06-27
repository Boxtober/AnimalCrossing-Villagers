import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Countries = () => {
    const [data, setData] = useState([])

    useEffect(() => { // useEffect ce jouer lorsque le composant est appelé
        axios
        
       .get("https://restcountries.com/v3.1/all")
        .then((res) => setData(res.data)); // passe toutes les données à setData
    }, []);


    return (
        <div className='countries'>      
            <ul className="ratio-container">
                <input type="range" />
            </ul>
            <ul>
                {data.map((country, index) => (
                   <Card key={index} country={country} />
                ))}
            </ul>
        </div>
    );
};

export default Countries;