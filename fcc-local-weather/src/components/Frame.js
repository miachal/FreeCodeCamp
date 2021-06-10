import React from 'react';
import City from './City';
import ScalePicker from './ScalePicker';
import Today from './Today';
import NextDay from './NextDay';

class Frame extends React.Component {
    render() {
        let nextDays = [];

        for (let j = 0; j < this.props.weather.length; j++) {
            nextDays.push(
                <NextDay
                    key={j}
                    isCelsius={this.props.isCelsius}
                    weather={this.props.weather[j]}
                    handleChangeActiveDay={this.props.handleChangeActiveDay}
                />);
        }

        return (
            <div className='frame'>
                <div className='top-part'>
                    <City data={this.props.city} />
                    <ScalePicker
                        isCelsius={this.props.isCelsius}
                        handleChangeScale={this.props.handleChangeScale}
                    />
                </div>

                <div className='mid-part'>
                    <Today
                        isCelsius={this.props.isCelsius}
                        weather={this.props.active}
                    />
                </div>

                <div className='btn-part'>
                    {nextDays}
                </div>
            </div>
        );
    }
}

export default Frame;