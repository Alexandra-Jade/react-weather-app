import React from "react";
import axios from "axios";


 

export default function Weather(props) {
    function handleResponse(response) {
        alert(`The weather in ${props.city} is ${response.data.main.temp}℃`);
    }

    let apiKey = "476fc8273a4982024fc651e75dacfe77";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;


    axios.get(apiUrl).then(handleResponse);
    return <h2>  </h2>;
}