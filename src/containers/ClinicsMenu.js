import React, { Component } from 'react'
//library components
import { Menu, Segment } from 'semantic-ui-react'
//components
import { ListItem } from '../components/ListItem';
//helper function 
import { nameSlug } from '../helperFunctions/HelperFunctions'

class ClinicsMenu extends Component {
    state={ activeMenuItem: 'HIV Clinics'}

    setActiveMenuItem= (focus) =>{
        this.setState({
            activeMenuItem: focus
        })
    }

    displayList = () =>{
        switch(this.state.activeMenuItem){
            case 'Dialysis Clinics':
                return this.props.dialysisClinics
            case 'HIV Clinics':
                return this.props.hivClinics
            default:
                return []
        }
    }
    
    render(){
        return(
            <div>
                <Menu attached='top' tabular >
                    <Menu.Item 
                        name='HIV Clinics' 
                        active={this.state.activeMenuItem === 'HIV Clinics'} 
                        onClick={() => this.setActiveMenuItem('HIV Clinics')}
                        className="health-2 health-text" 
                    />
                    <Menu.Item 
                        name='Dialysis Clinics' 
                        active={this.state.activeMenuItem === 'Dialysis Clinics'} 
                        onClick={() => this.setActiveMenuItem('Dialysis Clinics')} 
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
                                path={'clinics'}
                                key={index}
                            /> 
                        })}
                </Segment>
            </div>
        )
    }
}

export default ClinicsMenu