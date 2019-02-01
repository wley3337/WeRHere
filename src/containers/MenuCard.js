import React from 'react'
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