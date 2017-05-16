import React from 'react'
import Nav from './Nav'
import Home from './Home'

const App = () => {
  return (
    <div>
      <h1>Navigating the taxonomic ranks</h1>
      <div className='container'>
        <Nav/>
        <Home/>
      </div>
    </div>
  )
}

export default App
