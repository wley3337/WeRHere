import React from 'react'
import { Card } from 'semantic-ui-react';



export const MenuCard= (props) =>{
    return (
        <Card >
            <Card.Content>
                {props.icon}
                
                <Card.Description>
                    {props.text}
                </Card.Description>
            </Card.Content>


        </Card>
    )
}