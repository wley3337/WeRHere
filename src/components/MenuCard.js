import React from 'react'
//library components
import { Link } from 'react-router-dom'
import { Card } from 'semantic-ui-react';



export const MenuCard= ({menuObj}) =>{
    return (
        <Card className="health-l .health-text">
            <Card.Content textAlign="center" > 
                <Link to={menuObj.route} >
                    <div className=".health-text">
                        {menuObj.title}
                    </div>
                        {menuObj.icon}
                    </Link>
            </Card.Content>
        </Card>
 
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