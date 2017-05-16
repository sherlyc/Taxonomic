import React from 'react'
import Ranks from "../../data/ranks"
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div  className="nav">
      <h1> Nav</h1>
      <ul>
        {Object.keys(Ranks).map((rank) => {
          return <li><Link to={'/list/' + rank}>{rank}</Link></li>
        })}
      </ul>
    </div>
  )
}

export default Nav
