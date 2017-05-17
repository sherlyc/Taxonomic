import React from 'react'
import {Link} from 'react-router-dom'
import species from '../../data/species'


const ListSpecies = props => {
    let objSpecies = findSpecies(species, props.name, props.rank)

    return (
        <ul>
            {objSpecies.map((specie)=> {
                return <li><Link to={`/species/${specie.id}`}>{specie.name}</Link></li>
            })}

        </ul>
    )
}

function findSpecies(data, name, rank) {
    return data.filter((item) => {
        return item[rank] == name
    })
}



 export default ListSpecies
