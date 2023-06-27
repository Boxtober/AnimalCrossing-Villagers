import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';


const Countries = () => {
    const [data, setData] = useState([]);
    const [rangeValue, setRangeValue] = useState(36);
    const [selectedRadio, setSelectedRadio] = useState('')
    const radios = [
        "Alligator",
        "Anteater",
        "Bear",
        "Bird",
        "Bull",
        "Cat",
        "Chicken",
        "Cow",
        "Cub",
        "Deer",
        "Dog",
        "Duck",
        "Eagle",
        "Elephant",
        "Frog",
        "Goat",
        "Gorilla",
        "Hamster",
        "Hippo",
        "Horse",
        "Kangaroo",
        "Koala",
        "Lion",
        "Monkey",
        "Mouse",
        "Octopus",
        "Ostrich",
        "Penguin",
        "Pig",
        "Rabbit",
        "Rhino",
        "Sheep",
        "Squirrel",
        "Tiger",
        "Wolf",
      ];
      
    useEffect(() => {
        axios
            .get("https://acnhapi.com/v1a/villagers/")
            .then((res) => setData(Object.values(res.data)));
    }, []);

    return (
        <div className='countries'>
            <ul className="ratio-container">

                <input 
                    type="range" 
                    min="1" max="400" 
                    defaultValue={rangeValue} 
                    onChange={(e) => setRangeValue(e.target.value)}
                />

                {radios.map((species) => (
                    <li>
                        <input 
                            type="radio" 
                            id={species} 
                            name='speciesRadio'
                            checked={species === selectedRadio}
                            onChange={(e) => setSelectedRadio(e.target.id)}
                        />
                        <label htmlFor={species}>{species}</label>
                    </li>
                ))}
            </ul>

            <ul>
                {selectedRadio && 
                    <button onClick={() => setSelectedRadio("")}>All</button>
                }
                {data
                    .filter((character) => character.species.includes(selectedRadio))
                    .slice(0, rangeValue)
                    .map((character, index) => (
                    <Card key={index} character={character} />
                ))}
            </ul>
        </div>
    );
};


export default Countries;

