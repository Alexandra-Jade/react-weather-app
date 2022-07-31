import React from "react";
import Weather from "./Weather";

import './App.css';

export default function App() {
    return <div className = "App" > 
    <div className="container">
    <Weather defaultCity="Cape Town"/>
    <footer> This project was coded by Alexandra Jade Rodrigues and is {""}
       <a href="https://github.com/Alexandra-Jade/react-weather-app"
       target="_blank"
       rel="noreferrer">open sourced on GitHub</a> </footer>
       </div>
       </div>
}