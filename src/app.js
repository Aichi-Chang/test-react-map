import React from 'react'
import ReactDOM from 'react-dom'
// import { HashRouter, Switch, Route } from 'react-router-dom'

import './styles/style.scss'

import Map from './components/Map'



const App = () => (

  <div style={{ height: '100vh' }}>
    <Map />
  </div>

  
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)