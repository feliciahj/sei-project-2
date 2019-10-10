import React from 'react'


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
      <input onChange={(e) => this.handleChange(e)}
        placeholder="Type in your city" 
      />
      <button onClick={(e) => this.handleSubmit(e)} type="submit">Show me the weather</button>
      <button onClick={(e) => this.handleSubmitLondon(e)} type="submit">I am a Londoner</button>
      </>
    )
  }
}

export default Home