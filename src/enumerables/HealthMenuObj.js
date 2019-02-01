import React from 'react'
import {SemanticPhoneIcon, HospitalIcon, CompussIcon} from '../icons'
export const healthMenu = ()=>{
    return(
        [
            {
                title: "Mental Health",
                route: "/health/mental-health",
                icon: <SemanticPhoneIcon />
            },
            {
                title: "Clenics",
                route: "/health/clenics",
                icon: <HospitalIcon />
            }
        ]
    )
} 

