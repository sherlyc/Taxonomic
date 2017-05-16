import React from 'react'
import Ranks from "../../data/ranks"

const Nav = () => {
  return (
    <div  className="nav">
      <h1> Nav</h1>
      <ul>
        {Object.keys(Ranks).map((rank) => {
          return <li>{rank}</li>
        })}
      </ul>
    </div>
  )
}

export default Nav
