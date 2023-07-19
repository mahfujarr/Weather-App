const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '953703ddf4msh4aadf18c0202129p148e2bjsn56e932a53b37',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city)=>{

    cityName.innerHTML = city

    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {


        console.log(response)

        temp.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset


    })
    .catch(err => console.error(err));
}
submit.addEventListener("click", (e) =>{
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Rangpur")