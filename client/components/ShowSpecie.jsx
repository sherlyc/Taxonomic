import React from 'react'

import species from "../../data/species"

const ShowSpecie = ({match})=> {
  var id = match.params.id
  var objSpecie = findSpecie(species, id)

  return (
    <div>
      <h1>{objSpecie.name}</h1>
      <p>{objSpecie.description}</p>
      <p><img src={objSpecie.photo}></img></p>
    </div>
  )
}

function findSpecie(data, id) {
  return data.find((item)=> {
    return item.id == id
  })
}

export default ShowSpecie
