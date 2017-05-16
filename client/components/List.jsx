import React from 'react'
import Ranks from "../../data/ranks"
import {Link} from 'react-router-dom'

const List = (props) => {
  var rank = props.match.params.rank //kingdoms
  var data = Ranks[rank]

  console.log(data)
  return (
    <div className='subList'>
        <h1>{rank}</h1>
        <ul>
         {data.map((item) => {
              return <li>{item.name}</li>
            })
         }

        </ul>
    </div>
  )
}

export default List
