import React from 'react'
import { Link } from 'react-router-dom'




export const ClinicListItem = ({ location, slug }) =>{
    return (
        <div>
            <Link to={`/health/clinics/${slug}`} >
            <div> {location.attributes.NAME} </div> 
            <div> {location.attributes.ADDRESS} </div>
            <div> {location.attributes.PHONE} </div>
             </Link>
        </div>
    )
       
}