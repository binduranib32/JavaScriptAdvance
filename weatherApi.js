const date = document.querySelector('#date');
const city = document.querySelector('#city');
const temp = document.querySelector('#temp');
const tempImg = document.querySelector('#tempImg');
const description = document.querySelector('#description');
const tempMax = document.querySelector('#tempMax');
const tempMin = document.querySelector('#tempMin');

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let dateObj = new Date();
let month = months[dateObj.getUTCMonth()];
let day = dateObj.getUTCDate();
let year = dateObj.getUTCFullYear();

date.innerHTML = `${month} ${day}, ${year}`;

const app =document.getElementById('app');

const getWeather = async () => {
    
    try {

        const cityName = document.getElementById('searchBarInput').value.trim(); // Explicitly get and trim the input value
        if (cityName) { // Ensure cityName is not empty
        const weatherDataFetch = await fetch('https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=62531c8a3fcbf602d1446559742ef463&units=metric', {
            headers: {
                Accept: "application/json"
            }
        });

        const weatherData = await weatherDataFetch.json();
        console.log(weatherData);

        city.innerHTML = `${weatherData.name}`;
        description.innerHTML = `${weatherData.weather[0].main}`;
        tempImg.innerHTML = `<img src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png" alt="weather icon"/>`;
        temp.innerHTML = `<h2>${Math.round(weatherData.main.temp)}°C</h2>`;
        tempMax.innerHTML = `${weatherData.main.temp_max}°C`;
        tempMin.innerHTML = `${weatherData.main.temp_min}°C`;
        
         } else {
            console.warn("Please enter a city name."); // Add warning if the input is empty
         }

    } catch (error) {
        console.log(error);
    }
};