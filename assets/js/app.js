/**
 * @license MIT
 * @copyright Yeswanth Sai Inturi 2024 All rights reserved
 * @author Yeswanth Sai Inturi <yeswanthsai.inturi@gmail.com>
 */

"use strict";

const api_key = "71b14ece60beab8353719aa5af855e3c";

/**
 * 
 * @param {string} URL API URL
 * @param {function} callback callback function
 */

export const fetchData = function (URL, callback) {
  fetch(`${URL}&appid=${api_key}`)
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((error) => console.log(error));
};

export const url = {
    currentWeather(lat, lon){
        return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`
    },
    forecast(lat, lon){
        return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`
    },
    airpollution(lat, lon){
        return `https://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`
    },
    reverseGeo(lat, lon){
        return `https://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`
    },
    /**
     * 
     * @param {string} city Search Query e.g.: "London", "New York"
     */
    geo(city){
        return `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5`
    }
}