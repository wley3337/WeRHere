import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions'
//components
import MultimapContainer from '../../containers/MultiMapContainer'

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
       return this.props.selectedServiceTarget === "" ? 
            this.props.services 
            : 
            this.props.services.filter( location => location.action.TARGET === this.props.selectedServiceTarget )
    }

    resultsToMap = () =>{
        const resultsToMap = []
        const filterAPIKeys = this.props.filterOptions.map(option => option.apiKey)
        const locationsWithServiceTarget = this.serviceTargetFilter()
        //if at any point an object's key has a value not null and it's in the filter API Keys array then incriment counter, if counter is === to the lenght of the filterAPIKeys array then add it to the array to be maped and 
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
                {locationsToDisplay.length > 0 ? <MultimapContainer locations={locationsToDisplay} prgDescription={desc} sprite="embassy-15"/> : null} 
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