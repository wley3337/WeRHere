import React, { Component } from 'react'

//components
import { ClinicListItem } from '../components/ClinicListItem';
import { Input, Menu, Segment } from 'semantic-ui-react'

//helper function 
import { nameSlug } from '../helperFunctions/HelperFunctions'


class ClinicHealth extends Component {
    state={ activeMenuItem: 'Dialysis Clinics'}

    setActiveMenuItem= (focus) =>{
        this.setState({
            activeMenuItem: focus
        })
    }

    displayList = () =>{
        switch(this.state.activeMenuItem){
            case 'Dialysis Clinics':
                return this.props.dialysisClinics

            case 'Primary Care Centers':
                return this.props.primaryCareCenters

            default:
                return []
        }
    }
    
    render(){
        return(
            <div>
                
                <div className="health-text">Clinics</div>

                <Menu attached='top' tabular >

                    <Menu.Item 
                        name='Dialysis Clinics' 
                        active={this.state.activeMenuItem === 'Dialysis Clinics'} 
                        onClick={() => this.setActiveMenuItem('Dialysis Clinics')} 
                        className="health-2 health-text"
                    />
                    <Menu.Item 
                        name='Primary Care Centers' 
                        active={this.state.activeMenuItem === 'Primary Care Centers'} 
                        onClick={() => this.setActiveMenuItem('Primary Care Centers')}
                        className="health-2 health-text" 
                        />
                </Menu>
                    {/* Segment is used to display content */}
                <Segment attached='bottom'>

                        {/* used 'location' for this because of key word provider */}
                        {this.displayList().map( (location, index) => {
                            return <ClinicListItem location={location} slug={nameSlug(location.properties.NAME)}key={index}/> 
                        })}
                       
                </Segment>

            </div>
        )
    }
}

export default ClinicHealth