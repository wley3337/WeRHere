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

    shelterSubMenuDescriptions = ()=>{
        return "A map with all the shelters in DC. Click on an icon for information about that shelter."
    }
    render(){
 
        return(
            <div className="shelter-2 bg-div">
                 <Route exact path='/shelter/shelters' render={() =>{
                    return <MultimapContainer locations={this.props.homelessShelterLocations} prgDescription={this.shelterSubMenuDescriptions()} sprite="lodging-15"/>}}  
                />  
             <NavBar section={"shelter"} />
            </div>
        )
    }
}

const mSTP = (state)=>{
    return{
        homelessShelterLocations: state.homelessShelterLocations
    }
}

export default withRouter(connect(mSTP, actions)(ShelterMain))