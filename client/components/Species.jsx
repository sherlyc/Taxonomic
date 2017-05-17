import React from 'react'
import {Link} from 'react-router-dom'
//import Singular from './Singular'

import species from "../../data/species"
import singular from "../../data/singular"

const Species = ({match})=> {
  var name = match.params.name
  var rank = match.params.rank
  var singular = getSingular(rank) //kingdoms -> kingdom

  return (
    <div>
      <h1>Species</h1>
      <h3>{findSpecies(species, name, singular).name}</h3>
    </div>
  )
}

function getSingular (props) {
   return singular[props]
}

function findSpecies(data, name, rank) {
    return data.find((item) => {
    return item[rank] == name
  })

}



export default Species
