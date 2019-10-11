import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import '../src/assets/fonts/manbow-tone.tff'

import Home from './components/Home'
import ShowPage from './components/ShowPage'

const App = () => (
  <BrowserRouter>
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/weather/:id" component={ShowPage} />
      </Switch>
    </main>
  </BrowserRouter>
)
  
 
ReactDOM.render(
  <App />,
  document.getElementById('root')
)

//Will not use 5 DAY WEATHER API
// getDataFive(){
//   const token = process.env.REACT_APP_WEATHER_ACCESS_KEY
//   axios.get(`http://api.openweathermap.org/data/2.5/forecast?id=2643743&APPID=${token}`)
//     .then(res => this.setState(console.log(res)))
//     .catch(err => this.setState({ error: err.message }))
// }