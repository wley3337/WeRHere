import React from 'react' 



export const ServiceDetails = ({properties}) =>{
    // debugger

    return(
        <div style={{"color": "blue"}}>
            <p>Medical Services Available: </p>
            
            <p>{properties.NAME.includes('Dialysis') ?
                "Dialysis"
                    :
                properties.PRIMARY_CARE_INFOMEDICAL_SERVICES_AVAILABLE}
            </p>
            {properties.PRIMARY_CARE_INFOOTHER_SERVICES ? 
                <p>Other Services: {properties.PRIMARY_CARE_INFOOTHER_SERVICES} </p>
                : null 
            }


                
        </div>
    )
}