import React from 'react';
import { celsiusToFahrenheit, iconToClass, degToDirection, formatDate } from '../helpers';

const Today = props => {
    let { temp, temp_min, temp_max } = props.weather.main;
    const { pressure, humidity } = props.weather.main;
    const cloudiness = props.weather.clouds.all;
    const { speed, deg } = props.weather.wind;
    const { icon, description } = props.weather.weather[0];
    const date = formatDate(props.weather.dt_txt);
    let scaleClass = 'wi-celsius';

    if (!props.isCelsius) {
        temp = celsiusToFahrenheit(temp);
        temp_min = celsiusToFahrenheit(temp_min);
        temp_max = celsiusToFahrenheit(temp_max);
        scaleClass = 'wi-fahrenheit';
    }

    return (
        <React.Fragment>
            <div className='left-icon'>
                <div className='icon'><i className={`wi ${iconToClass(icon)}`}></i></div>
                <div className='description'>{description}</div>
                <div className='date'>{date}</div>
            </div>

            <div className='temperature'>
                <div className='now'>
                    {temp.toFixed(1)} <i className={`wi ${scaleClass}`}></i>
                </div>
                <div className='min-max'>
                    <div><i className='wi wi-direction-down'></i> {temp_min.toFixed(1)} <i className={`wi ${scaleClass}`}></i></div>
                    <div><i className='wi wi-direction-up'></i> {temp_max.toFixed(1)} <i className={`wi ${scaleClass}`}></i></div>
                </div>
            </div>

            <div className='details'>
                <div><i className='wi wi-barometer'></i> {pressure} hPa</div>
                <div><i className='wi wi-humidity'></i> {humidity} %</div>
            </div>

            <div className='details'>
                <div><i className='wi wi-strong-wind'></i> {speed} m/s</div>
                <div><i className='wi wi-wind-direction'></i> {degToDirection(deg)} ({deg.toFixed(1)}<i className='wi wi-degrees'></i>)</div>
                <div><i className='wi wi-cloud'></i> <span>{cloudiness} %</span></div>
            </div>

        </React.Fragment>
    );
};

export default Today;