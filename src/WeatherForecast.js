import React from "react";

import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";


export default function WeatherForecast() {

    return (
        <div className="row">
            <div className="col">
                <div className="WeatherForecastDay">Thu</div>
                < WeatherIcon code="01d" size={36} />
                <div className="WeatherForecast-temperatures">
                <span className="WeatherForecast-temperatures-max">19°</span>
                <span className="WeatherForecast-temperatures-min">10°</span>
                </div>
            </div>

        </div>
    )
    }