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