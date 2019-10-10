import React from 'react'
import axios from 'axios'
import '../../src/style.scss'

class London extends React.Component {
  constructor() {
    super()

    this.state = {
      weather: null,
      lines: null,
      error: null
    }

  }

  componentDidMount(){
    this.getData()
    this.getTubeData()
  }

  getData(){
    const token = process.env.REACT_APP_WEATHER_ACCESS_KEY
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=London&APPID=${token}`)
      .then(res => this.setState({ weather: res.data }))
      .catch(err => this.setState({ error: err.message }))
  }

  getTubeData() {
    axios.get('https://api.tfl.gov.uk/line/mode/tube/status')
      .then(res => this.setState({ lines: res.data }))
      .catch(err => this.setState({ error: err.message }))
  }

  componentDidUpdate() {
    setInterval(() => {
      this.getData()
      this.getTubeData
      console.log('updated')
      // updates every 10 min:
    },600000)
  }
  
  render() {
    const date = new Date(1570752000 * 1000)
    console.log(date)
    //  MUST ALWAYS HAVE THE RETURN NULL BEFORE TRYING TO RETRIEVE THINGS INSIDE THE OBJECT:
    if (!this.state.weather) return null
    const { weather } = this.state
    return (
      <>
      <h1>The weather in {weather.name} is</h1>
      <p>{Math.round(weather.main.temp_min - 273.15)}°C - {Math.round(weather.main.temp_max - 273.15)}°C</p>
      <div className={weather.weather[0].main}>{weather.weather[0].description}</div>
      <ul>
        {this.state.lines &&
        this.state.lines.map(line => {
          return <li key={line.id}>
            <p>{line.name}</p>
            <p>{line.lineStatuses[0].statusSeverityDescription}</p>
          </li>
        })
        }
      </ul>
      </>
    )
  }
}

export default London
