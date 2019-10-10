import React from 'react'
import axios from 'axios'


import ShowPage from './ShowPage'

class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      city: '',
      weatherData: {}
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const city = e.target.value
    console.log(city)
    this.setState({ city })
  }

  handleSubmit(e) {
    e.preventDefault()
    // this.getData()
    this.props.history.push(`/weather/${this.state.city}`)
  }

  componentDidMount(){
    console.log('mounted')
  }

  // Refactored into ShowPage:
  // getData(){
  //   const token = process.env.REACT_APP_WEATHER_ACCESS_KEY
  //   axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&APPID=${token}`)
  //     .then(res => this.setState({ weatherData: res.data }))
  //     .catch(err => console.log(err.message))
  // }

  // Used to test that the API was working on change:
  // componentDidUpdate(){
  //   this.getData()
  // }

  render() {
  
    return (
      <>
      <input onChange={(e) => this.handleChange(e)}
        placeholder="Type in your city" 
      />
      <button onClick={(e) => this.handleSubmit(e)} type="submit">Show me the weather</button>
      </>
    )
  }
}

export default Home