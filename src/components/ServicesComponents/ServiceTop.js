import React, {Component} from 'react'
//redux
import {connect} from 'react-redux'
import * as actions from '../redux/actions'


class ServiceTop extends Component{
    render(){
        return(
            <div className="service-top"> Service Top</div>
        )
    }
}

const mSTP = (state) =>{
    return{

    }
}

export default connect(mSTP, actions)()