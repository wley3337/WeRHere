import React from 'react'
//library components
import { Card } from 'semantic-ui-react';
//menu objects
import { foodMenuObj } from '../enumerables/FoodMenuObj'
//components
import { MenuCard } from '../components/MenuCard';

export const FoodMenu = () =>{   
    return(
        <Card.Group centered doubling stackable >
            {foodMenuObj().map( (menuObj, index) => 
                <MenuCard  menuObj={menuObj} key={index} />
            )} 
        </Card.Group>
    )  
}
