import React, { Component } from 'react'
//library components
import { Menu, Segment } from 'semantic-ui-react'
//components
import { ListItem } from '../components/ListItem';
import { OpioidListItem } from '../components/HealthComponents/OpioidListItem';
//helper function 
import { nameSlug } from '../helperFunctions/HelperFunctions'

class TreatmentMenu extends Component {
    state={ activeMenuItem: 'Youth Rehabilitation Facilities'}

    setActiveMenuItem= (focus) =>{
        this.setState({
            activeMenuItem: focus
        })
    }

    displayList = () =>{
        switch(this.state.activeMenuItem){
            case 'Youth Rehabilitation Facilities':
                return this.props.youthRehabFacilities.map((location, index) => {
                        return <ListItem 
                            location={location} 
                            slug={nameSlug(location.properties.NAME)}
                            path={'treatment'}
                            key={index}
                        /> 
                })
            case 'Opioid Treatment Facilities':
                return this.props.opioidTreatmentFacilities.map((location, index) => {
                    return <OpioidListItem 
                        location={location} 
                        key={index}
                    /> 
            })
            default:
                return []
        }
    }
    
    render(){
        return(
            <div>
                <div className="health-text treat-wrapper">Clinics</div>
                <Menu attached='top' tabular >
                    <Menu.Item 
                        name='Youth Rehabilitation Facilities' 
                        active={this.state.activeMenuItem === 'Youth Rehabilitation Facilities'} 
                        onClick={() => this.setActiveMenuItem('Youth Rehabilitation Facilities')}
                        className="health-2 health-text" 
                    />
                    <Menu.Item 
                        name='Opioid Treatment Facilities' 
                        active={this.state.activeMenuItem === 'Opioid Treatment Facilities'} 
                        onClick={() => this.setActiveMenuItem('Opioid Treatment Facilities')} 
                        className="health-2 health-text"
                    />
                </Menu>
                    {/* Segment is used to display content */}
                <Segment attached='bottom'>

                        {/* used 'location' for this because of key word provider */}
                        {this.displayList()}
                </Segment>
            </div>
        )
    }
}

export default TreatmentMenu


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

