import React from 'react'

import species from "../../data/species"

const ShowSpecie = ({match})=> {
  var id = match.params.id

  return (
    <div>
      <h1>{name}</h1>
      <p>{findSpecie(species, name).description}</p>
      <div><Link to={`${match.url}/species`}>Show species</Link></div>
    </div>
  )
}

function findSpecie(data, id) {
  return data.find((item)=> {
    return item.id == id
  })
}

export default ShowSpecie
