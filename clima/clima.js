const url = "https://api.openweathermap.org/data/2.5/weather?lat=-24.18320&lon=-65.33134&appid=c6752a2c66dbbdb9d53a1b43a9bb6212&lang=sp"

let ciudad = document.getElementById("city")
let country = document.getElementById("country")
let temp = document.getElementById("temp")
let icono = document.getElementById("icon")
let description = document.getElementById("description")

const getDataClima = () => {
    fetch(url)
        .then(resp => resp.json())
        .then(resp => {
            ciudad.textContent = resp.name
            country.textContent = resp.sys.country 
            icono.src = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${resp.weather[0].icon}.svg`
            temp.textContent = Math.round(resp.main.temp - 273.48) + "°"
            description.textContent = resp.weather[0].description.toUpperCase()
        })
}

getDataClima()