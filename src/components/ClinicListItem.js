import React from 'react'
import { Link } from 'react-router-dom'




export const ClinicListItem = ({ location, slug }) =>{
    return (
        <div>
            <Link to={`/health/clinics/${slug}`} >
            <div> {location.properties.NAME} </div> 
            <div> {location.properties.ADDRESS} </div>
            <div> {location.properties.PHONE} </div>
             </Link>
        </div>
    )
       
}