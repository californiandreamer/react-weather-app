import React, {useState, useEffect} from 'react'
import Info from '../../components/Temperature/Temperature'
import Form from '../../components/Form/Form'
import Weather from '../../components/Weather/Weather'
import Sidebar from '../../components/Sidebar/Sidebar'

const API_KEY = "ac86c246e29375c3c550bc572de71173" 

const Layout = () => {
  const [state, setState] = useState({
    temp: null,
    city: null,
    country: null,
    pressure: null,
    humidity: null,
    sunset: null,
    error: null
  })

  const getClientCoords = () => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      let lat = position.coords.latitude
      let lon = position.coords.longitude

      const coords_api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
      const data = await coords_api_url.json()

      let temperature = data.main.temp
      let tempRound = Math.round(temperature)

      let sunset = data.sys.sunset
      let date = new Date()
      date.setTime(sunset)
      let sunsetDate = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()

      setState({
        ...state,
        temp: tempRound,
        city: data.name,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        sunset: sunsetDate,
      })

      // console.log(data)
    });
};

const gettingWeather = async (e) => {
  e.preventDefault()

  let city = e.target.elements.city.value
  
  if(city) {
    const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    
    const data = await api_url.json();
    
    let temperature = data.main.temp
    let tempRound = Math.round(temperature)
    
    let sunset = data.sys.sunset
    let date = new Date()
    date.setTime(sunset)
    let sunsetDate = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()

    setState({...state,
      temp: tempRound,
      city: data.name,
      pressure: data.main.pressure,
      humidity: data.main.humidity,
      sunset: sunsetDate
    })
  } else {
    setState({
      ...state,
      error: "Please, input your city"
    })
  }
}

useEffect(() => {
  getClientCoords()
}, [])

return(
  <div>
      <Sidebar />
      <Info {...state} />
      <Form onSubmit={gettingWeather} />
      <Weather 
      {...state} 
      />
  </div>
)

}

export default Layout