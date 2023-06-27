import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';
const Countries = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get("https://acnhapi.com/v1a/villagers/")
            .then((res) => setData(Object.values(res.data)));
    }, []);

    return (
        <div className='countries'>
            <ul className="ratio-container">
                <input type="range" />
            </ul>
            <ul>
                {data.map((character, index) => (
                    <Card key={index} character={character} />
                ))}
            </ul>
        </div>
    );
};


export default Countries;

