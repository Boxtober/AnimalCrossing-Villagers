import React from 'react';

const Card = ({ character }) => {
    return (
        <li className="card">
            <img
                src={character.image_uri}
                alt={character.name["name-USen"]}
            />
            <div className="infos">
                <h2>{character.name["name-USen"]}</h2>
                <h4>{character.species}</h4>
                <p>{character.personality}</p>
            </div>
        </li>
    );
};

export default Card;