import React from 'react'


export const HealthItemDetail = ({location}) =>{ 
    
    return (!location ? null 
            :

            <div className="health-text">
                <h1>{location.properties.NAME}</h1> 

                <h2>Address: {`${location.properties.ADDRESS}`}</h2>

            </div>
    )
}