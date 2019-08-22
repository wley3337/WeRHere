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


//This file is part of WeRHere.

// WeRHere is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// WeRHere is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with WeRHere.  If not, see <https://www.gnu.org/licenses/>