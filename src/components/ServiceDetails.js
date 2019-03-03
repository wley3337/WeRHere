import React from 'react' 

export const ServiceDetails = ({properties}) =>{
    return(
        <div className="menu-text">
            <p>Services Available: </p>
            
            <p>{properties.SERVICES}</p>
               
        </div>
    )
}