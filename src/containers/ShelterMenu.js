import React from 'react'
//library components
import { Card } from 'semantic-ui-react';
//menue objects
import { shelterMenuObj } from '../enumerables/ShelterMenuObj'
//components
import { MenuCard } from '../components/MenuCard';

 const ShelterMenu = () =>{   
    return(
        <Card.Group centered doubling stackable >
            {shelterMenuObj().map( (menuObj, index) => 
                <MenuCard  menuObj={menuObj} key={index} />
            )} 
        </Card.Group>
    )  
}

export default ShelterMenu