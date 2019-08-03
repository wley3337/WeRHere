import React from 'react'
//library components
import { Link } from 'react-router-dom'
//helper function
import { phone1, phone2 } from '../helperFunctions/HelperFunctions'

export const ListItem = ({ location, slug, path }) =>{ 
    return (
        <div className="li-wrapper">
            <Link to={`/health/${path}/${slug}`} >
                <div className="li-info">
                    <div className="li-name"> {location.properties.NAME} </div> 
                    <div className="li-address"> {location.properties.ADDRESS} </div>
                    {!location.properties.PHONE ? null :
                        <div className="li-phone-wrapper">
                            <p className="li-phone-1"> Phone: {phone1(location)} </p>
                            {! phone2(location) ? null :
                            <p className="li-phone-2"> {phone2(location).phoneType}: {phone2(location).phoneNumber2}</p>
                            }
                        </div>
                    }
                </div>
                <div id="arrow">></div>
            </Link>
        </div>
    )      
}

