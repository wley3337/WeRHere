import React from 'react'
//library components
import { Link } from 'react-router-dom'
//helper function
import { phone1, phone2 } from '../helperFunctions/HelperFunctions'

export const ListItem = ({ location, slug, path }) =>{ 
    return (
        <div>
            <Link to={`/health/${path}/${slug}`} >
                <div> {location.properties.NAME} </div> 
                <div> {location.properties.ADDRESS} </div>
                {!location.properties.PHONE ? null :
                    <div>
                        <p> Phone: {phone1(location)} </p>
                        {! phone2(location) ? null :
                        <p> {phone2(location).phoneType}: {phone2(location).phoneNumber2}</p>
                        }
                    </div>
                }
            </Link>
        </div>
    )      
}

