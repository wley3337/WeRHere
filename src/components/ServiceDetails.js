import React from 'react' 

export const ServiceDetails = ({properties}) =>{
    debugger
    return(
        <div className="menu-text char-space">
            <p>Services Available: </p>
            
            <p>{properties.SERVICES}</p>
               
        </div>
    )
}