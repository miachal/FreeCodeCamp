export function fahrenheitToCelsius(fdeg) {
    return (fdeg - 32) * 5 / 9;
}

export function celsiusToFahrenheit(cdeg) {
    return cdeg * 9 / 5 + 32;
}

export function isEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

export function formatDate(dt_txt) {
    const parts = dt_txt.split(' ')[0].split('-');
    const day = parts[2];
    const month = parts[1];
    const year = parts[0];

    return `${day}/${month}/${year}`;
}

export function iconToClass(iconId) {
    const icons = {
        '01d': 'wi-day-sunny',
        '01n': 'wi-night-clear',
        '02d': 'wi-day-cloudy',
        '02n': 'wi-night-alt-cloudy',
        '03d': 'wi-day-cloudy-high',
        '03n': 'wi-night-alt-cloudy-high',
        '04d': 'wi-day-cloudy-high',
        '04n': 'wi-night-alt-cloudy-high',
        '09d': 'wi-day-rain',
        '09n': 'wi-night-alt-rain',
        '10d': 'wi-day-rain',
        '10n': 'wi-night-alt-rain',
        '11d': 'wi-day-thunderstorm',
        '11n': 'wi-night-alt-thunderstorm',
        '13d': 'wi-day-snow',
        '13n': 'wi-night-alt-snow',
        '50d': 'wi-day-fog',
        '50n': 'wi-night-fog',
    };

    return icons[iconId];
}

export function degToDirection(deg) {
    const isBetween = (number, a, b) => {
        const min = Math.min(a, b);
        const max = Math.max(a, b);

        return number >= min && number <= max;
    };

    let direction;

    if (isBetween(deg, 337.5, 360) || isBetween(deg, 0, 22.5)) direction = 'N';
    else if (isBetween(deg, 22.6, 67.6)) direction = 'NE';
    else if (isBetween(deg, 67.7, 112.7)) direction = 'E';
    else if (isBetween(deg, 112.8, 157.8)) direction = 'SE';
    else if (isBetween(deg, 157.9, 202.9)) direction = 'S';
    else if (isBetween(deg, 203, 248)) direction = 'SW';
    else if (isBetween(deg, 248.1, 293.1)) direction = 'W';
    else direction = 'NW';

    return direction;
}

export function descriptionToBgClass(description) {
    const weather = {
        'Clear': 'bg-clear-sky',
        'Clouds': 'bg-clouds',
        'Rain': 'bg-rain',
        'Snow': 'bg-snow',
        'Thunder': 'bg-thunder',
        'Fog': 'bg-fog'
    };

    return weather[description];
}