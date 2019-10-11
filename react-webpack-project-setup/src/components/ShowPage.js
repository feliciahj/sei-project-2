import React from 'react'
import axios from 'axios'
import '../../src/style.scss'

class ShowPage extends React.Component {
  constructor() {
    super()

    this.state = {
      weather: null,
      error: null, 
      news: null
    }
    this.handleClick = this.handleClick.bind(this)
    this.getData = this.getData.bind(this)
  }
  
  handleClick() {
    this.render()
    this.componentDidUpdate()
  }
  
  componentDidMount() {
    console.log('mounted')
    this.getData()
  }

  componentDidUpdate() {
    if (!this.state.news && this.state.weather) return this.getNews()
  }

  getData() {
    const token = process.env.REACT_APP_WEATHER_ACCESS_KEY
    const city = this.props.match.params.id
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${token}`)
      .then(res => this.setState({ weather: res.data }))
      .catch(err => this.setState({ error: err.message }))
  }

  getNews() {
    const tokenNews = process.env.REACT_APP_NEWS_ACCESS_KEY
    const country = this.state.weather.sys.country
    console.log(country)
    axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${tokenNews}`)
      .then(res => this.setState({ news: res.data.articles }))
      .catch(err => this.setState({ error: err.message }))
  }
  
  render() {
    //  MUST ALWAYS HAVE THE RETURN NULL BEFORE TRYING TO RETRIEVE THINGS INSIDE THE OBJECT:
    if (!this.state.weather) return null
    const { weather, news } = this.state
    return (
      <>
      <h2>The weather in {weather.name} is</h2>
      <p>{Math.round(weather.main.temp_min - 273.15)}°C - {Math.round(weather.main.temp_max - 273.15)}°C</p>
      <div className={weather.weather[0].main}>{weather.weather[0].description}</div>
      <button onClick={this.handleClick}>Refresh</button>
      <div>
        <h2>News</h2>
        <ul>
          {news &&
          news.filter((article, index) => (index < 5)).map(article => {
            return <li key={article.url}>
              <p>{article.title}</p>
            </li>
          })}
        </ul>
      </div>
      </>
    )
  }
}

export default ShowPage

//.filter((i, index) => (index < 3))

//.then(res => this.setState({ news: res.data.articles }))
//if (this.state.weather && !this.state.news) return this.getData()
// .then(res => console.log(res.data.articles))

{/* <ul>
        {lines &&
        lines.map(line => {
          return <li key={line.id}>
            <p>{line.name}</p>
            <p>{line.lineStatuses[0].statusSeverityDescription}</p>
          </li>
        })
        }
      </ul> */}