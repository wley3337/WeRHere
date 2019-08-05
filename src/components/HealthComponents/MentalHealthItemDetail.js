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