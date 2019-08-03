import React from 'react' 

export const PrimaryCareServiceDetails = ({properties}) =>{
    return(
        <div className="menu-text pc-detail-wrapper">
            <p className="pc-menu-title">Medical Services Available: </p>
            
            <p className="pc-menu-ser">{properties.PRIMARY_CARE_INFOMEDICAL_SERVICES_AVAILABLE}</p>
            
            {properties.PRIMARY_CARE_INFOOTHER_SERVICES ? 
                <p className="pc-menu-other-ser">Other Services: {properties.PRIMARY_CARE_INFOOTHER_SERVICES} </p>
                : null 
            } 
        </div>
    )
}