import React from 'react'
import {FoodBowlIcon} from '../icons'
export const foodMenuObj = ()=>{
    return(
        [
            {
                title: "Joyful Food Markets",
                route: "/food/joyful-food",
                icon: <FoodBowlIcon />
            },
            {
                title: "Healthy Corner Stores",
                route: "/food/corner-stores",
                icon: <FoodBowlIcon />
            },
            {
                title: "WIC",
                route: "/food/wic",
                icon: <FoodBowlIcon />
            },
           
        ]
    )
} 

