import React, { Component } from 'react'
//redux
import { connect } from 'react-redux'
import * as actions from '../redux/actions'


class MentalHealth extends Component {
    
    render(){
        return(
             <div className="health-text">MentalHealth</div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        childMentalHealthProviders: state.childMentalHealthProviders
    }
}


export default connect(mapStateToProps, actions)(MentalHealth)