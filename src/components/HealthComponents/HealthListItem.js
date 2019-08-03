import React from 'react'
//library components
import { Link } from 'react-router-dom'

export const HealthListItem = ({ location, slug }) =>{
    return (
        <div className="h-li">
            <Link to={`/health/mental-health/${slug}`} > {location.properties.NAME} </Link>
        </div>
    )
       
}