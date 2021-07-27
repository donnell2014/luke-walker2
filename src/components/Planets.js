import React from 'react';

const Planets = props => {
    const { name, climate, terrain, surface_water, population } = props.planets;
    return (
        <div>
            <h1>{name}</h1>
            <h3>Climate: {climate}</h3>
            <h3>Terrain: {terrain}</h3>
            <h3>Surface Water: {surface_water}</h3>
            <h3>Population: {population}</h3>
        </div>
    )
}

export default Planets