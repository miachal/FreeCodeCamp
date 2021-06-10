import React from 'react';
import axios from 'axios';
import Frame from './Frame';
import Loader from './Loader';
import config from '../credentials';
import { descriptionToBgClass } from '../helpers';

class App extends React.Component {
    state = {
        isCelsius: true,
        isReady: false,
        weather: [],
        bgClass: 'bg-sun'
    };

    handleChangeScale = () => {
        const isCelsius = this.state.isCelsius;
        this.setState({ isCelsius: !isCelsius });
    };

    handleChangeActiveDay = (active) => {
        const weather = this.state.weather.filter(i => i.dt !== active.dt);
        weather.push(this.state.active);
        weather.sort((a, b) => a.dt - b.dt);

        const bgClass = descriptionToBgClass(active.weather[0].main);

        this.setState({
            active,
            weather,
            bgClass
        });
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.bgClass !== this.state.bgClass)
            document.body.classList = [this.state.bgClass];
    }

    componentDidMount() {
        document.body.classList = [this.state.bgClass];

        navigator.geolocation.getCurrentPosition(position => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            const api = 'https://api.openweathermap.org/data/2.5/forecast';

            axios.get(api, {
                params: {
                    lat: latitude,
                    lon: longitude,
                    units: 'metric',
                    APPID: config.API_KEY
                }
            })
                .then(response => {
                    const city = response.data.city;
                    const weather = response.data.list.filter((v, i) => {
                        return !(i % 8);
                    });
                    const active = weather.shift();

                    const bgClass = descriptionToBgClass(active.weather[0].main);

                    this.setState({
                        city,
                        weather,
                        active,
                        bgClass,
                        isReady: true
                    });
                })
                .catch(error => {
                    // hm? :)
                    console.log(error);
                })
        });

    }

    render() {
        if (!this.state.isReady)
            return <Loader />

        return <Frame
            isCelsius={this.state.isCelsius}
            handleChangeScale={this.handleChangeScale}
            city={this.state.city}
            weather={this.state.weather}
            handleChangeActiveDay={this.handleChangeActiveDay}
            active={this.state.active}
        />;
    }
}

export default App;