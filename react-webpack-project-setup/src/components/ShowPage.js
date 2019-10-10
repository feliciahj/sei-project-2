import React from 'react'
import axios from 'axios'
import '../../src/style.scss'

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
    // this.getGiphy()
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
    const { weather } = this.state
    return (
      <>
      <h1>The weather in {weather.name} is</h1>
      <p>{Math.round(weather.main.temp_min - 273.15)}°C - {Math.round(weather.main.temp_max - 273.15)}°C</p>
      <div className={weather.weather[0].main}>{weather.weather[0].description}</div>
      </>
    )
  }
}

export default ShowPage