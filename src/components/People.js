import React from 'react';

const People= props => {
    const { name, height, mass, hair_color, skin_color } = props.people;
    return (
        <div>
            <h1>{name}</h1>
            <h3>Height: {height}</h3>
            <h3>Mass: {mass}</h3>
            <h3>Hair Color: {hair_color}</h3>
            <h3>Skin Color: {skin_color}</h3>
        </div>
    )
}

export default People