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

//This file is part of WeRHere.

// WeRHere is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// WeRHere is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with WeRHere.  If not, see <https://www.gnu.org/licenses/>
