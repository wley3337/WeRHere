import React from 'react'
import {SemanticPhoneIcon, HospitalIcon, CompussIcon} from '../icons'
export const healthMenuObj = ()=>{
    return(
        [
            {
                title: "Mental Health",
                route: "/health/mental-health",
                icon: <SemanticPhoneIcon />
            },
            {
                title: "Clinics",
                route: "/health/clinics",
                icon: <HospitalIcon />
            }
        ]
    )
} 

