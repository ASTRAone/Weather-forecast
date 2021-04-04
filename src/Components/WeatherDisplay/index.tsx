import React, { useEffect, useState } from 'react';
import './style.css';

interface PropsWeather {
    zip: string
}

const WeatherDisplay: React.FC<PropsWeather> = ({ zip }, props) => {

    const [data, setData] = useState<any>();

    useEffect(() => {
        const URL = `http://api.openweathermap.org/data/2.5/weather?q=${zip}&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=imperial`;
        fetch(URL).then(res => res.json()).then(json => {
            setData(json);
        })
        .catch((error) => {
            console.log('Request failed', error);  
        });
    });

    const weather = data?.weather ? data.weather[0] : '';
    const SRC = `http://openweathermap.org/img/w/${weather?.icon}.png`;

    if (!data) {
        return (
            <div>
                <p>Прогноз погоды в депрессии</p>
            </div>
        );
    }

    return (
        <div className="weather">
            <h2 className="weather__title">
                {weather?.main} in {data?.name}
                <img src={SRC} alt={data?.description} />
            </h2>
                <div className="weather-content">
                    <p className="weather-content__item">
                        Current: {data?.main?.temp}°
                    </p>
                    <p className="weather-content__item">
                        High: {data?.main?.temp_max}°
                    </p>
                    <p className="weather-content__item">
                        Low: {data?.main?.temp_min}°
                    </p>
                    <p className="weather-content__item">
                        Wind Speed: {data?.wind?.speed} mi/hr
                    </p>
                </div>
        </div>
    );
};

export default WeatherDisplay;