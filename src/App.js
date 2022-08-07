import React from "react";
import Weather from "./Weather";

import './App.css';

export default function App() {
    return <div className = "App" > 
    <div className="container">
    <Weather defaultCity="Cape Town"/>
    <footer> This project was coded by {""} <a href="https://jadedcode.netlify.app/" target="_blank" rel="noopener noreferrer">Alexandra Jade Rodrigues </a>{""}and is {""}
       <a href="https://github.com/Alexandra-Jade/react-weather-app"
       target="_blank"
       rel="noopener noreferrer">open sourced on GitHub</a> {""}
       and {""} <a href="https://reactweatherappsa.netlify.app/" target="_blank"
       rel="noopener noreferrer"> hosted on netlify</a>
       </footer>
       </div>
       </div>
}