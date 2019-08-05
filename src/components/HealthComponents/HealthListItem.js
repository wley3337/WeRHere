import React from 'react'
//library components
import { Link } from 'react-router-dom'

export const HealthListItem = ({ location, slug }) =>{
    return (
        <div className="li-wrapper">
            <div className="li-info">
                <Link to={`/health/mental-health/${slug}`} > 
                    {location.properties.NAME} 
                    <div id="arrow">></div>
                 </Link>
            </div>
        </div>
    )
}