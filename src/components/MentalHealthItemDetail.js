import React from 'react'
import MapFrame from './MapFrame'


export const MentalHealthItemDetail = ({location}) =>{ 
    
    return (!location ? null 
            :

            <div className="health-text">
                <h1>{location.properties.NAME}</h1> 

                <h2>Address: {`${location.properties.ADDRESS}`}</h2>
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