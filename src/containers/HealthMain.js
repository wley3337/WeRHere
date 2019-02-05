import React, { Component } from 'react'
import { Route } from 'react-router-dom'
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
             {/* this looks like it is diplaying regardless as well, however I it's layered undernieth */}
            <Route exact={true} path='/health/mental-health' component={MentalHealth} />
                

                {/* this is displaying regardless of sub route '/health' */}
            <Route exact={true} path='/health' render={() => <HealthMenu />} />
            <NavBar section={"health"} />
        </div>
    )
    }
}



export default connect(null, actions )(HealthMain)