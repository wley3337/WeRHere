import React, {Component} from 'react'
//redux
import {connect} from 'react-redux'
import * as actions from '../../redux/actions'
import { Radio } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class ServiceNavBar extends Component{
    handleToggle = (checked) =>{
        
    }

    render(){
        return(
            <div className="service-Navbar">
                <p className="service-navbar-or">Or</p>
                <Radio 
                toggle
                checked={this.props.orAnd === 'and'? true:false} 
                onChange={(e, {checked})=>{this.props.toggleOrAnd(checked)}}
                />
                <p className="service-navbar-and">And</p>
               <Link to="/services/results" id="service-search">
                Search
               </Link> 
                
            </div>
        )
    }
}

const mSTP = (state) =>{
    return{
        orAnd: state.orAnd
    }
}

export default connect(mSTP, actions)(ServiceNavBar)