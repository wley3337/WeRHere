import React from 'react'
//library components
import { Card } from 'semantic-ui-react';
//menue objects
import { foodMenuObj } from '../enumerables/FoodMenuObj'
//components
import { MenuCard } from '../components/MenuCard';

export const FoodMenu = (props) =>{   
        return(
            <Card.Group centered doubling stackable >
                {foodMenuObj().map( (menuObj, index) => 
                    <MenuCard  menuObj={menuObj} key={index} />
                )} 
            </Card.Group>
        )  
}
