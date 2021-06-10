import React from 'react';

const City = props => {
    const { name, country } = props.data;

    return (
        <div className='city'>
            {name}, {country}
        </div>);
};

export default City;