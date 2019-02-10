import React from 'react'
import { Link } from 'react-router-dom'




export const HealthListItem = ({ location, slug }) =>{
    return (
        <div>
            <Link to={`/health/mental-health/${slug}`} > {location.attributes.NAME} </Link>
        </div>
    )
       
}