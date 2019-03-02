import React from 'react'
import { Link } from 'react-router-dom'




export const ListItem = ({ location, slug, path }) =>{
    return (
        <div>
            <Link to={`/health/${path}/${slug}`} >
            <div> {location.properties.NAME} </div> 
            <div> {location.properties.ADDRESS} </div>
            <div> {location.properties.PHONE} </div>
             </Link>
        </div>
    )
       
}