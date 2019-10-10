import React from 'react'
import axios from 'axios'
import '../../src/style.scss'

class London extends React.Component {
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
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=London&APPID=${token}`)
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

export default London



// this.state = {
//   lines: null,
//   error: null
// }
// this.handleClick = this.handleClick.bind(this)
// this.getData = this.getData.bind(this)
// }

// handleClick() {
// this.render()
// this.componentDidUpdate
// }

// componentDidMount() {
// this.getData()
   
// }

// getData() {
// console.log('I have mounted')
// axios.get('https://api.tfl.gov.uk/line/mode/tube/status')
//   .then(res => this.setState({ lines: res.data }))
//   .catch(err => this.setState({ error: err.message }))
// }

// componentDidUpdate() {

// }

// render() {
// console.log('I have rendered', this.state.lines)
// return (
//   <div>
//     <button onClick={this.handleClick}>Refresh</button>
//     <ul>
//       {this.state.lines &&
//         this.state.lines.map(line => {
//           return <li key={line.id}>
//             <p>{line.name}</p>
//             <p>{line.lineStatuses[0].statusSeverityDescription}</p>
//           </li>
//         })
//       }
//     </ul>
//   </div>
// )
// }
// }