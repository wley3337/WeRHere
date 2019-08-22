import React from 'react'
//components
import MapFrame from '../MapFrame'

export const MentalHealthItemDetail = ({location}) =>{ 
    return (!location ? null 
            :
            <div className="health-text mh-item-detail">
                <p className="mh-access-phone"> 24/7 Access Helpline:  <a href={`tel: ${18887934357}`}>1-888-7WE-HELP</a></p>
                <h1 className="name">{location.properties.NAME}</h1> 
                <p className="address">Address: <span className="space-left">{`${location.properties.ADDRESS}`}</span></p>
                <div id="map-div">
                    {location.geometry.coordinates[0] < -75 && location.geometry.coordinates[0] > -80 ?  
                        <MapFrame 
                            lat={location.geometry.coordinates[0]} 
                            long={location.geometry.coordinates[1]}
                            sprite="doctor-15"
                        />
                        :
                        <h1>No Map information available</h1>
                    }
                </div> 
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