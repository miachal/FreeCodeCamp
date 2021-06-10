import React from 'react';
import { celsiusToFahrenheit, formatDate, iconToClass } from '../helpers';

const NextDay = props => {
    let { temp_min, temp_max } = props.weather.main;
    let scaleClass = 'wi-celsius';
    const icon = props.weather.weather[0].icon;

    if (!props.isCelsius) {
        temp_min = celsiusToFahrenheit(temp_min);
        temp_max = celsiusToFahrenheit(temp_max);
        scaleClass = 'wi-fahrenheit';
    }

    return (
        <div className='next-day' onClick={() => props.handleChangeActiveDay(props.weather)}>
            <div className='weather-icon'>
                <i className={`wi ${iconToClass(icon)}`}></i>
            </div>

            <div className='date'>
                {formatDate(props.weather.dt_txt)}
            </div>

            <div className='day-night'>
                <div className='max'>{temp_max.toFixed(1)} <i className={`wi ${scaleClass}`}></i></div>
                <div className='slash'>/</div>
                <div className='min'>{temp_min.toFixed(1)} <i className={`wi ${scaleClass}`}></i></div>
            </div>
        </div>
    );
};

export default NextDay;