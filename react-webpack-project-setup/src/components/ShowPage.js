import React from 'react'
import axios from 'axios'

import Home from './Home'

class ShowPage extends React.Component {
  
  
  
  
  componentDidMount(){
    console.log('mounted')
    this.getData()
  }

  getData(){
    const token = process.env.REACT_APP_WEATHER_ACCESS_KEY
    const city = this.props.match.params.id
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${token}`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err.message))
  }
  
  
  render() {
    console.log(this.props)
    return (
      <h1>Hello</h1>
    )
  }
}

export default ShowPage