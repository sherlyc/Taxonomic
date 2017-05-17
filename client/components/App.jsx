import React from 'react'
import Nav from './Nav'
import Home from './Home'
import List from './List'
import Rank from './Rank'
import Species from './Species'
import {HashRouter as Router, Route} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div>
        <h1>Navigating the taxonomic ranks</h1>
        <div className='container'>
          <Nav/>
          <Route exact={true} path='/' component={Home}/>
          <Route exact={true} path='/list/:rank' component={List} />
          <Route path='/rank/:rank/:name' component={Rank} />
          <Route path='/rank/:rank/:name/species' component={Species}/>
        </div>
      </div>
    </Router>
  )
}

export default App
