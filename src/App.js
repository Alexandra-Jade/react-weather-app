import React from "react";

import Weather from "./Weather";

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
    return <div className = "App" >
        <header className = "App-header" >
      <div class="container">
        <div class="weather-app-wrapper border border-white p-4 rounded-3">
          <div class="weather-app">
          <div><ul class="list-group list-group-horizontal" ><li a href="" class="m-2 p-2">Namibia  </li><li a href="" class="m-2 p-2">Botswana</li><li  a href="" class="m-2 p-2">Mozambique</li></ul></div>
            <form id="search-form" class="mb-3">
              <div class="row">
               <div></div>
                <div class="col-9">
                  <input
                    type="search"
                    placeholder="Type a city..."
                    class="form-control"
                    id="city-input"
                    autocomplete="off"
                  />
                          < Weather city="Cape Town"/>

                </div>
                <div class="col-3">
                  <input
                    type="submit"
                    value="search"
                    class="btn btn-primary w-100"
                  />
                </div>
              </div>
            </form>
            <div class="overview">
              <h1 id="city">Cape Town</h1>
              <ul>
                <li>
                  Last updated: Saturday June 11, 19:41 <span id="date"></span>
                </li>
                <li id="description">Clear</li>
              </ul>
            </div>
            <div class="row">
              <div class="col-6">
                <div class="clearfix weather-temperature">
                  <div class="d-flex flex-row bd-highlight mb-3">
                    <img
                      src="https://openweathermap.org/img/wn/10d@2x.png"
                      alt="Rainy"
                      id="icon"
                    />
                    <div class="p-2 bd-highlight">
                      <strong id="temperature">12</strong>
                      <div class="p-1 bd-highlight">
                        <span class="units">°C</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="d-flex flex-row-reverse bd-highlight">
                  <ul>
                    <li>
                      Humidity: <span id="humidity">73 </span>%
                    </li>
                    <li>
                      Wind: <span id="wind">2</span>km/h
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <small class="github-link">
        <a
          href="https://github.com/Alexandra-Jade/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a> 
        by Alexandra Jade Rodrigues
      </small>
        </header> 
        </div> ;
}

export default App;