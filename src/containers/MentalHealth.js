import React, { Component } from 'react'
//library components
import {Menu, Segment } from 'semantic-ui-react'
//components
import { HealthListItem } from '../components/HealthComponents/HealthListItem';
//helper function 
import { nameSlug } from '../helperFunctions/HelperFunctions'

class MentalHealth extends Component {
    state={ activeMenuItem: 'Youth Services'}

    setActiveMenuItem= (focus) =>{
        this.setState({
            activeMenuItem: focus
        })
    }

    displayList = () =>{
        switch(this.state.activeMenuItem){
            case 'Adult Services':
                return this.props.adultMentalHealthProviders
            case 'Youth Services':
                return this.props.childMentalHealthProviders
            default:
                return []
        }
    }
    
    render(){
        return(
            <div>        
                <h1 className="health-text">Mental Health Service Providers</h1>
                <Menu attached='top' tabular >
                    <Menu.Item 
                        name='Youth Services' 
                        active={this.state.activeMenuItem === 'Youth Services'} 
                        onClick={() => this.setActiveMenuItem('Youth Services')} 
                        className="health-2 health-text"
                    />
                    <Menu.Item 
                        name='Adult Services' 
                        active={this.state.activeMenuItem === 'Adult Services'} 
                        onClick={() => this.setActiveMenuItem('Adult Services')}
                        className="health-2 health-text" 
                        />
                </Menu>
                    {/* Segment is used to display content */}
                <Segment attached='bottom'>
                    {/* used 'location' for this because of key word provider */}
                    {this.displayList().map( (location, index) => {
                        
                        return <HealthListItem location={location} slug={nameSlug(location.properties.NAME)}key={index}/> 
                    })}                  
                </Segment>
            </div>
        )
    }
}

export default MentalHealth

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