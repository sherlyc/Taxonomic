import React from 'react'
import {Link} from 'react-router-dom'
import ListSpecies from './ListSpecies'
import species from "../../data/species"
import singular from "../../data/singular"

const Species = ({match})=> {
  var name = match.params.name
  var rank = match.params.rank
  var singular = getSingular(rank) //kingdoms -> kingdom

  return (
    <div>
      <h1>Species</h1>
      <ListSpecies name={name} rank={singular}/>
    </div>
  )
}

function getSingular (props) {
   return singular[props]
}




export default Species
