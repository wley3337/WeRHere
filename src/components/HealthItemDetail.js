import React from 'react'


export const HealthItemDetail = ({location}) =>{ 
    
    return (!location ? null 
            :

            <div className="health-text">
                <h1>{location.NAME}</h1> 

                <h2>Address: {`${location.ADDRESS}`}</h2>

            </div>
    )
}