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
    
    render(){
        return(
            <div>

                <div className="health-text">MentalHealth</div>

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

                    {/* used 'location' for this because of key word provider */}
                    {/* {this.props.childMentalHealthProviders.map( (location, index) => {
                        return <HealthListItem location={location} key={index}/> 
                    })} */}

                </Menu>
                    {/* Segment is used to display content */}
                <Segment attached='bottom'>
                        {/* used 'location' for this because of key word provider */}
                        {this.props.childMentalHealthProviders.map( (location, index) => {
                            return <HealthListItem location={location} slug={nameSlug(location.NAME)}key={index}/> 
                        })}
                       
                </Segment>

            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        childMentalHealthProviders: state.childMentalHealthProviders
    }
}


export default connect(mapStateToProps, actions)(MentalHealth)