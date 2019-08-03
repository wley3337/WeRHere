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