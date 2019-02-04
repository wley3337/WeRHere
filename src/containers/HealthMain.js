import React, { Component } from 'react';
import { Route} from 'react-router-dom';
import HealthMenu from '../components/HealthMenu';
import{  NavBar } from '../components/NavBar'

 class HealthMain extends Component {
    render(){return(
        <div
            className="health-2 bg-div"
        >
            <Route exact path='/health' component={HealthMenu} />
            <NavBar section={"health"} />
        </div>
    )
    }
}

export default HealthMain