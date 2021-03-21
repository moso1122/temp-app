const form = document.querySelector('.form-control')
const inp = document.querySelector('input')
const main = document.querySelector('.main .main_temp')
const min = document.querySelector('.main .main_min')
const max = document.querySelector('.main .main_max')
const img = document.querySelector('.main img')



async function KnowWeather(city){
    const api = '2f3bdd813488b2620ea49b91f190c4d9'
    const url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`)
    const json = await url.json()
    if (parseInt(json.cod) === 200 ){
        const icon = json.weather[0].icon
        const get_icon = `http://openweathermap.org/img/wn/${icon}.png`
        main.innerHTML = 'temp' +  '  ' + Math.round((json.main.temp - 273)) + '°C'
        img.setAttribute('src',get_icon)
        let map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: json.coord.lat, lng: json.coord.lon },
          zoom: 15,
        });
    }
    if (parseInt(json.cod) === 404) {
        alert(json.message) 
    }
} 

form.addEventListener('submit',(event)=>{
    event.preventDefault()
    KnowWeather(inp.value)
})