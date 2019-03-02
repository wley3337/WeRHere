import React, { Component } from 'react'

//components
import { ListItem } from '../components/ListItem';
import { Input, Menu, Segment } from 'semantic-ui-react'

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

            // case 'Pharmicies':
            //     return this.props.pharmicies

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