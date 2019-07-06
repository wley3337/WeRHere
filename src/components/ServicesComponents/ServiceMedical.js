import React, {Component} from 'react'
//redux
import {connect} from 'react-redux'
import * as actions from '../../redux/actions'

class ServiceMedical extends Component{
    render(){
        return(
            <div className="service-medical"> Service Medical</div>
        )
    }
}

const mSTP = (state) =>{
    return{

    }
}

export default connect(mSTP, actions)(ServiceMedical)