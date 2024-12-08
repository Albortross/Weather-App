const input = document.getElementById("input")
function submitHandler(e) {
    e.preventDefault();
    console.log("input : " + input.value)



    fetch(`https://api.weatherapi.com/v1/current.json?key=108fd45a2cde40bcaea174646241407&q=${input.value}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);

            const location = document.getElementById('location')
            location.innerText ="Location : " + data.location.name

            const temperature = document.getElementById("temperature")
            temperature.innerText = "Temp :" + data.current.temp_c + "'c"

            const humidity = document.getElementById("humidity")
            humidity.innerText ="Humdity : " + data.current.humidity

            const wind = document.getElementById("wind")
            wind.innerText ="Wind : "+ data.current.wind_kph
            
            const weatherimage = document.getElementById('weatherimage');
            weatherimage.src = data.current.condition.icon
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

