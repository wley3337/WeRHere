import React, { Component } from 'react'
import { healthMenuObj } from '../enumerables/HealthMenuObj'
import { MenuCard } from './MenuCard';
import { Card } from 'semantic-ui-react';

 class HealthMenu extends Component {
    render(){return(
      
        <Card.Group centered doubling stackable >

            {healthMenuObj().map( (menuObj, index) => 
                    <MenuCard  menuObj={menuObj} key={index} />
            )}
        
        </Card.Group>

    )
    }
}

export default HealthMenu