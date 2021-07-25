import React from 'react';

const Country = (props) => {
    //console.log(props.name);
    const {name,population, region, flag } = props.country;
    const flagStyle = {height:'100px'}
    const countryStyle = {border:'1px solid green', margin: '10px', padding: '10px'}
    const handleAddCountry = props.handleAddCountry;
    return (
        <div style = {countryStyle}>
            <h3>Country Name: {name}</h3>
             <img style ={flagStyle} src={flag} alt="" />
            <p>Population: {population}</p>
            <p><small>Region:</small> {region}</p>
            <button onClick = {() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;