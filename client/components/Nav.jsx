import React from 'react'
import Ranks from "../../data/ranks"

const Nav = () => {
  return (
    <ul>
    {Object.keys(Ranks).map((rank) => {
      return <li>{rank}</li>
    })}
    </ul>
  )
}

export default Nav
