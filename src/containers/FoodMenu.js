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

//This file is part of WeRHere.

// WeRHere is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// WeRHere is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with WeRHere.  If not, see <https://www.gnu.org/licenses/>
