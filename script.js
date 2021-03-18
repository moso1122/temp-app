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
        console.log(get_icon)
    }
    if (parseInt(json.cod) === 404) {
        alert(json.message) 
    }
    console.log(json)
} 

form.addEventListener('submit',(event)=>{
    event.preventDefault()
    KnowWeather(inp.value)
})