import React from 'react'
import { ShelterIcon } from '../icons'

export const shelterMenuObj = () =>{
    return ([
        {
            title: "Shelters",
            route: "/shelter/shelters",
            icon: <ShelterIcon />
        }
    ])
}