import React from 'react'

import '../../src/style.scss'
import Greeting from './Greeting'


class Home extends React.Component {
  constructor() {
    super()

    this.state = {
      city: null,
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
    if (!this.state.city) return null
    this.props.history.push(`/weather/${this.state.city}`)
  }

  handleSubmitLondon(e) {
    e.preventDefault()
    this.props.history.push('/weather/London')
  }

  componentDidMount(){
    console.log('mounted')
  }

  render() {
  
    return (
      <>
          <div className="container">
            <Greeting />
            <p className="subtitle is-2 has-text-centered">Where do you live?</p>
          </div>
          <section className="home">
            <input className="input" onChange={(e) => this.handleChange(e)}
              placeholder="Type in your city" 
            />
            <button className="button city" onClick={(e) => this.handleSubmit(e)} type="submit">LET'S GO!</button>
          </section>
          <div className="london">
            <button className="button london" onClick={(e) => this.handleSubmitLondon(e)} type="submit">HEY- I AM A LONDONER</button>
          </div>
          <div className="flying">
            <img className="catGif" src="http://giphygifs.s3.amazonaws.com/media/sIIhZliB2McAo/giphy.gif"></img>
          </div>
      </>
    )
  }
}

export default Home

// <img src="https://fontmeme.com/permalink/191011/5f852fa065a9a53884313ad8d9ee779c.png"></img>
//onKeyPress={this.handleSubmit}


// onKeyPress={(e) => this.handleKeyPress(e)}
// handleKeyPress(e) {
//   if (!this.state.city) return null
//   if (e.key === 'Enter') 
//     this.props.history.push(`/weather/${this.state.city}`)
// }