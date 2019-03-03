import React, { Component } from 'react'
//library components
import { Card } from 'semantic-ui-react';
//menue objects
import { healthMenuObj } from '../enumerables/HealthMenuObj'
//components
import { MenuCard } from '../components/MenuCard';

class HealthMenu extends Component {
    render(){
        return(
            <Card.Group centered doubling stackable >
                {healthMenuObj().map( (menuObj, index) => 
                    <MenuCard  menuObj={menuObj} key={index} />
                )} 
            </Card.Group>
        )
    }
}

export default HealthMenu