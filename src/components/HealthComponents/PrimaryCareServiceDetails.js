import React from 'react' 

export const PrimaryCareServiceDetails = ({properties}) =>{
    return(
        <div className="menu-text">
            <p>Medical Services Available: </p>
            
            <p>{properties.PRIMARY_CARE_INFOMEDICAL_SERVICES_AVAILABLE}</p>
            
            {properties.PRIMARY_CARE_INFOOTHER_SERVICES ? 
                <p>Other Services: {properties.PRIMARY_CARE_INFOOTHER_SERVICES} </p>
                : null 
            } 
        </div>
    )
}