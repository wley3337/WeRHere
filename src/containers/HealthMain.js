import React, { Component } from 'react'
import { healthMenu } from '../enumerables/HealthMenuObj'
import { MenuCard } from './MenuCard';
import { Card } from 'semantic-ui-react';

 class HealthMain extends Component {
    render(){return(
        <div
            className="health-2 bg-div"
        >
        <Card.Group centered doubling stackable >

            {healthMenu().map( (menuObj, index) => 
                    <MenuCard  menuObj={menuObj} key={index} />
            )}
        
        </Card.Group>

            <p className="health-text">Heatlh</p>
        </div>
    )
    }
}

export default HealthMain