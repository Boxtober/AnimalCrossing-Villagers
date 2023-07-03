import React from 'react';

const Card = ({ character }) => {
    return (
        <li className="card">
            <img
                src={character.image_uri}
                alt={character.name["name-USen"]}
            />
            <div className="infos">
                <br />
                <h2>{character.name["name-USen"]}</h2>
                <p>{character.personality}</p>
                <p>{character.birthday}</p>
                <p>{character.hobby}</p>
                <h4>" {character.saying} "</h4>
                <br />
            </div>
        </li>
    );
};

export default Card;