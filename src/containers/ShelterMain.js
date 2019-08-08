import React, {PureComponent} from 'react'
import { Route, withRouter } from 'react-router-dom'
//redux
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
//components
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
                {this.props.homelessShelterLocations.length === 0 ? null : 
                    <Route exact path='/shelter' 
                        render={() =>{
                            return <MultimapContainer locations={this.props.homelessShelterLocations} prgDescription={this.shelterSubMenuDescriptions()} sprite="lodging-15"/>}
                        }  
                    />  
                }
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