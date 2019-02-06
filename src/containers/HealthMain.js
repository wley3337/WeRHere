import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
//redux
import { connect } from 'react-redux'
import * as actions from '../redux/actions'

//components
import HealthMenu from '../components/HealthMenu'
import{  NavBar } from '../components/NavBar'
import MentalHealth from './MentalHealth'


 class HealthMain extends Component {

    componentDidMount(){
        this.props.getChildMentalHealthProviders()
    }

    render(){return(
        <div
            className="health-2 bg-div"
        >   
            
            <Route exact path='/health/mental-health' component={MentalHealth} />
        
            <Route exact path='/health' render={() => <HealthMenu />} />

            <NavBar section={"health"} />
        </div>
    )
    }
}


//need to wrap the componenent 'withRouter' because it won't rerender the children unless
// its state or props change, which are not changing when the route changes
export default withRouter(connect(null, actions )(HealthMain))