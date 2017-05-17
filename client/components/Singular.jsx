import React from 'react'

import singular from "../../data/singular"

const Singular = props => {

   return (
     <p>{singular[props.rank]}</p>
   )
}

export default Singular
