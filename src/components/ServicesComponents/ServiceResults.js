import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions'
//components
import MultimapContainer from '../../containers/MultiMapContainer'
import ServiceNoResults from './ServiceNoResults';

class ServiceResults extends PureComponent{
    mapIt = (filterAPIKeys, location) =>{
        let counter = 0;
        const length = filterAPIKeys.length
        for(const key in location.attributes){
            const keyValue = location.attributes[key]
            //stop condition
            if(counter === length){
                return true
            }
            //check to see if last property is included
            if(!!keyValue && filterAPIKeys.includes(key) && counter === length-1){
                return true
            }else if(!!keyValue && filterAPIKeys.includes(key)){
                counter++
            }
        }
        return false
    }

    serviceTargetFilter = () =>{
        // debugger
       return this.props.selectedServiceTarget === "" ? 
            this.props.services 
            : 
            this.props.services.filter( local => local.attributes.TARGET === this.props.selectedServiceTarget )
    }

    resultsToMap = () =>{
        const resultsToMap = []
        const filterAPIKeys = this.props.filterOptions.map(option => option.apiKey)
        const locationsWithServiceTarget = this.serviceTargetFilter()
        //if at any point an object's key has a value not null and it's in the filter API Keys array then incriment counter, if counter is === to the length of the filterAPIKeys array then add it to the array to be maped
        locationsWithServiceTarget.forEach(location => {
            if(this.mapIt(filterAPIKeys, location)){
                resultsToMap.push(location)
            }
        })
        return resultsToMap
    }
    render(){
        const selectedFOText = this.props.filterOptions.map(option => option.text)
        const displayText = selectedFOText.length > 0 ? 
            `All points displayed provide: ${selectedFOText.join(" and ")}` : ""
        const desc = (`Click on map icon for service address. ` + displayText)
        const locationsToDisplay = this.resultsToMap()

        return(
            <div>
                {locationsToDisplay.length > 0 ? <MultimapContainer locations={locationsToDisplay} prgDescription={desc} sprite="embassy-15"/> : <ServiceNoResults/>} 
            </div>
        )
    }
}

const mSTP = (state)=>{
    return{
        filterOptions: state.filterOptions,
        services: state.services,
        selectedServiceTarget: state.selectedServiceTarget
    }
}

export default connect(mSTP, actions)(ServiceResults)


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