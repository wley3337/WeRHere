import React from 'react'


export const ClinicItemDetail = ({location}) =>{ 
    
    return (!location ? null 
            :

            <div className="health-text">
                <h1>{location.attributes.NAME}</h1> 

                <h2>Address: {`${location.attributes.ADDRESS}`}</h2>

            </div>
    )
}