import React from 'react'
import { HospitalIcon } from '../icons'
export const healthMenuObj = ()=>{
    return(
        [
            {
                title: "Mental Health",
                route: "/health/mental-health",
                icon: <HospitalIcon />
            },
            {
                title: "Primary Care / Hospitals / Pharmicies",
                route: "/health/primary-care",
                icon: <HospitalIcon />
            },
            {
                title: "HIV and Dialysis Clinics",
                route: "/health/clinics",
                icon: <HospitalIcon />
            },
            {
                title: "Rehab and Treatment Facilities",
                route: "/health/treatment",
                icon: <HospitalIcon />
            }
        ]
    )
} 

