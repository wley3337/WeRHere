import React, {Component} from 'react'
//redux
import {connect} from 'react-redux'
import * as actions from '../../redux/actions'

class ServiceOther extends Component{
    render(){
        return(
            <div className="service-other"> Service Other</div>
        )
    }
}

const mSTP = (state) =>{
    return{

    }
}

export default connect(mSTP, actions)(ServiceOther)