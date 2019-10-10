import React from 'react'
import axios from 'axios'

class ShowPage extends React.Component {
  constructor() {
    super()

    this.state = {
      weather: null
    }

  }
  
  
  componentDidMount(){
    console.log('mounted')
    this.getData()
  }

  getData(){
    const token = process.env.REACT_APP_WEATHER_ACCESS_KEY
    const city = this.props.match.params.id
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${token}`)
      .then(res => this.setState({ weather: res.data }))
      .catch(err => console.log(err.message))
  }
  
  
  render() {
    //  MUST ALWAYS HAVE THE RETURN NULL BEFORE TRYING TO RETRIEVE THINGS INSIDE THE OBJECT:
    if (!this.state.weather) return null
    console.log(this.state.weather.weather[0].description)
    console.log(this.state.weather)
    console.log(this.state.weather.main.temp)
    const { weather } = this.state
    return (
      <>
      <h1>The weather in {weather.name} is</h1>
      <div>
        <p>{Math.round(weather.main.temp_min - 273.15)}°C - {Math.round(weather.main.temp_max - 273.15)}°C</p>
        <p>{weather.weather[0].description}</p>
      </div>
      </>
    )
  }
}

export default ShowPage