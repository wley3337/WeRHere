import {
        SET_SERVICES, 
        SET_SERVICE_TARGETS_DROPDOWN,
        TOGGLE_OR_AND,
        SET_SELECTED_SERVICE_TARGET,
        ADD_TO_FILTER,
        REMOVE_FROM_FILTER,
        CLEAR_SERVICE_FILTER
                                        } from './types'

export const getServices = ()=>(dispatch)=>{
    fetch('https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Service_WebMercator/MapServer/6/query?where=1%3D1&outFields=*&outSR=4326&f=json')
    .then(r=> r.json())
    .then(data =>{
        const allServiceProviders = data.features
        const targets = []
        const targetObjs= []
        for(let service of allServiceProviders){
            if( service.attributes.TARGET && !targets.includes(service.attributes.TARGET) ){
                targets.push(service.attributes.TARGET)
                targetObjs.push(
                    {key: targets.length, 
                     text: service.attributes.TARGET, 
                     value: service.attributes.TARGET}
                )
            }
            //this adds an array for multipoint map functionality
            //and makes the data from this api meet the same formating data as all the others
            service.geometry.coordinates = [service.geometry.x, service.geometry.y]
            service.properties = { ADDRESS: service.attributes.STREET_ADDRESS, service: {org: service.attributes.ORGANIZATION_NAME, program: service.attributes.PROGRAM_NAME}  }
        }
        dispatch({type: SET_SERVICES, payload: allServiceProviders})
        dispatch({type: SET_SERVICE_TARGETS_DROPDOWN, payload: targetObjs})
    })
}

export const setServiceTarget = (value) =>{
    return {type: SET_SELECTED_SERVICE_TARGET, payload: value}
}

export const toggleOrAnd = (checked) =>{ 
    const result = checked ? "and" : "or"
    return {type: TOGGLE_OR_AND, payload: result}  
}

export const addToFilter = (item)=>{
    return {type: ADD_TO_FILTER, payload: item}
}

export const removeFromFilter = (item) =>{
    return {type: REMOVE_FROM_FILTER, payload: item}
}

export const clearServiceFilter = ()=>{
    return {type: CLEAR_SERVICE_FILTER}
}

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
// along with WeRHere.  If not, see <https://www.gnu.org/licenses/