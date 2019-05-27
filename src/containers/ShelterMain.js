import React, {PureComponent} from 'react'
import { Route, withRouter } from 'react-router-dom'
//redux
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
//components
import { NavBar } from '../components/NavBar'
import MultimapContainer from './MultiMapContainer';

class ShelterMain extends PureComponent {
    componentDidMount(){
        this.props.getHomelessShelterLocations()
    }
    render(){
        return(
            <div>shelter main </div>
        )
    }
}

const mSTP = (state)=>{
    return{

    }
}

export default withRouter(connect(mSTP, actions)(ShelterMain))