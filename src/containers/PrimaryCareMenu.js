import React, { Component } from 'react'
//library components
import { Menu, Segment } from 'semantic-ui-react'
//components
import { ListItem } from '../components/ListItem';
//helper function 
import { nameSlug } from '../helperFunctions/HelperFunctions'


class PrimaryCareMenu extends Component {
    state={ activeMenuItem: 'Primary Care Centers'}

    setActiveMenuItem= (focus) =>{
        this.setState({
            activeMenuItem: focus
        })
    }

    displayList = () =>{
        switch(this.state.activeMenuItem){
            case 'Hospitals':
                return this.props.hospitals
            case 'Primary Care Centers':
                return this.props.primaryCareCenters
            case 'Pharmacies':
                return this.props.pharmacies
            default:
                return []
        }
    }
    
    render(){
        return(
            <div> 
                <Menu attached='top' tabular >
                    <Menu.Item 
                        name='Primary Care Centers' 
                        active={this.state.activeMenuItem === 'Primary Care Centers'} 
                        onClick={() => this.setActiveMenuItem('Primary Care Centers')}
                        className="health-2 health-text" 
                    />
                    <Menu.Item 
                        name='Hospitals' 
                        active={this.state.activeMenuItem === 'Hospitals'} 
                        onClick={() => this.setActiveMenuItem('Hospitals')} 
                        className="health-2 health-text"
                    />
                     <Menu.Item 
                        name='Pharmacies' 
                        active={this.state.activeMenuItem === 'Pharmacies'} 
                        onClick={() => this.setActiveMenuItem('Pharmacies')} 
                        className="health-2 health-text"
                    />
                </Menu>
                    {/* Segment is used to display content */}
                <Segment attached='bottom'>
                    {/* used 'location' for this because of key word provider */}
                    {this.displayList().map( (location, index) => {
                        return <ListItem 
                                location={location} 
                                slug={nameSlug(location.properties.NAME)}
                                path={"primary-care"}
                                key={index}
                                /> 
                    })}                   
                </Segment>
            </div>
        )
    }
}

export default PrimaryCareMenu

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