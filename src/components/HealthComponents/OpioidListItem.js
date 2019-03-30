import React from 'react'
//library components
import { Link } from 'react-router-dom'

export const OpioidListItem = ({ location }) =>{
    return (
        <div>
            <Link to={`/health/treatment/${location.properties.MAR_ID}`} > 
            <p>Organizaion: {location.properties.ORG}</p> 
            <p>facility number: {location.properties.MAR_ID}</p>
            </Link>
        </div>
    )
}