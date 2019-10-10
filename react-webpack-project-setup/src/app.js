import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
import ShowPage from './components/ShowPage'

const App = () => (
  <BrowserRouter>
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/weather" component={ShowPage} />
      </Switch>
    </main>
  </BrowserRouter>
)
  
 
ReactDOM.render(
  <App />,
  document.getElementById('root')
)