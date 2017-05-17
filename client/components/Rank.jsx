import React from 'react'
import {Link} from 'react-router-dom'

import ranks from "../../data/ranks"

const Rank = ({match}) => {
  var rank = match.params.rank
  var name = match.params.name
  var data = ranks[rank]

  return (
    <div>
      <h1>{name}</h1>
      <h3>{findName(data, name).description}</h3>
      <div><Link to={`${match.url}/species`}>Show species</Link></div>
    </div>
  )
}

function findName(data, name) {
  return data.find((item)=> {
    return item.name == name
  })
}


export default Rank
