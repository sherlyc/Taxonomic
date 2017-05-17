import React from 'react'
import {Link} from 'react-router-dom'

import ranks from "../../data/ranks"

const Nav = () => {
  return (
    <div  className="nav">
      <h1> Nav</h1>
      <ul>
        {Object.keys(ranks).map((rank) => {
          return <li><Link to={'/list/' + rank}>{rank}</Link></li>
        })}
      </ul>
    </div>
  )
}

export default Nav
