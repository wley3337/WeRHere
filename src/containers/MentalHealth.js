import React, { Component } from 'react'
//redux
import { connect } from 'react-redux'
import * as actions from '../redux/actions'

//components
import { HealthListItem } from '../components/HealthListItem';
import { Input, Menu, Segment } from 'semantic-ui-react'

//helper function 
import { nameSlug } from '../helperFunctions/HelperFunctions'


class MentalHealth extends Component {
    state={ activeMenuItem: 'Youth Mental Health Services'}

    setActiveMenuItem= (focus) =>{
        this.setState({
            activeMenuItem: focus
        })
    }

    displayList = () =>{
        switch(this.state.activeMenuItem){
            case 'Adult Mental Health Services':
                return this.props.adultMentalHealthProviders

            case 'Youth Mental Health Services':
                return this.props.childMentalHealthProviders

            default:
                return []
        }
    }
    
    render(){
        return(
            <div>
                
                <div className="health-text">Mental Health Service Providers</div>

                <Menu attached='top' tabular >

                    <Menu.Item 
                        name='Youth Mental Health Services' 
                        active={this.state.activeMenuItem === 'Youth Mental Health Services'} 
                        onClick={() => this.setActiveMenuItem('Youth Mental Health Services')} 
                        className="health-2 health-text"
                    />
                    <Menu.Item 
                        name='Adult Mental Health Services' 
                        active={this.state.activeMenuItem === 'Adult Mental Health Services'} 
                        onClick={() => this.setActiveMenuItem('Adult Mental Health Services')}
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