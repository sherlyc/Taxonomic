import React from 'react'
import {Link} from 'react-router-dom'

import ranks from "../../data/ranks"

const Rank = (props) => {
  var rank = props.match.params.rank
  var name = props.match.params.name
  var data = ranks[rank]

  console.log(data);
  return (
    <div>
      <h1>{name}</h1>
      <h3>{findName(data, name).description}</h3>
    </div>
  )
}

function findName(data, name) {
  return data.find((item)=> {
    return item.name == name
  })
}


export default Rank
