import React, {useState} from "react";
import axios from "axios";
import "./Weather.css";
import ClipLoader from "react-spinners/CircleLoader";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast"

import "./Weather.css";


export default function Weather(props) {
    const [weatherData, setWeatherData] = useState ({ ready:false });
    const [city,setCity] =useState(props.defaultCity)
    function handleResponse(response) {
        setWeatherData({
            ready:true,
            coordinates: response.data.coord,
            temperature:response.data.main.temp,
            date: new Date(response.data.dt * 1000),
            description:response.data.weather[0].description,
            iconUrl:`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            humidity:response.data.main.humidity,
            wind:response.data.wind.speed,
            city: response.data.name,
         
        });
    }

function search() {
    const apiKey = "476fc8273a4982024fc651e75dacfe77";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
}

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

function handleCityChange(event) {
setCity(event.target.value);
}

if (weatherData.ready) {
    return (<div className="Weather">
    <form onSubmit={handleSubmit}> 
        <div className="row">
        <div class="col-9"> 
        <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                id="city-input"
                autocomplete="on"
                onChange={handleCityChange}
              />
              </div>
              <div class="col-3"> 
              <input
                type="submit"
                value="search"
                className="btn btn-primary w-100"
              />
              </div>
              </div>
              </form>
              <WeatherInfo  data={weatherData}/>
              <WeatherForecast coordinates={weatherData.coordinates} />
   
</div> ); 

} else {
   
search();
    return (
        <div className="react-loader">
          <ClipLoader
            size={50}
            color={"#94b3fd"}
            loading={true}
            speedMultiplier={1}
          />
        </div>
      );
 }
}
