import React from 'react'
import {Link} from 'react-router-dom'

import ranks from "../../data/ranks"

const List = props => {
  var rank = props.match.params.rank //Phyla
  var data = ranks[rank]

  return (
    <div className='subList'>
        <h1>{rank}</h1>
        <ul>
         {data.map((item) => {
              return <li><Link to={'/rank/' + rank + '/' +  item.name}>{item.name}</Link></li>
            })
         }

        </ul>
    </div>
  )
}

export default List
