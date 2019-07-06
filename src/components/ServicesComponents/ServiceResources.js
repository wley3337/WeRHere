import React, {Component} from 'react'
//redux
import {connect} from 'react-redux'
import * as actions from '../../redux/actions'

class ServiceResources extends Component{
    render(){
        return(
            <div className="service-resources"> Service Resources</div>
        )
    }
}

const mSTP = (state) =>{
    return{

    }
}

export default connect(mSTP, actions)(ServiceResources)