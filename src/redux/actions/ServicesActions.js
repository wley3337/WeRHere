import {SET_SERVICES, SET_SERVICE_TARGETS_DROPDOWN} from './types'

export const getServices = ()=>(dispatch)=>{
    fetch('https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Service_WebMercator/MapServer/6/query?where=1%3D1&outFields=*&outSR=4326&f=json')
    .then(r=> r.json())
    .then(data =>{
        const allServiceProviders = data.features
        const targets = []
        const targetObjs= []
        for(let service of allServiceProviders){
            if(!targets.includes(service.attributes.TARGET) && service.attributes.TARGET){
                targets.push(service.attributes.TARGET)
                targetObjs.push(
                    {key: targets.length, 
                     text: service.attributes.TARGET, 
                     value: service.attributes.TARGET}
                )
            }
        }
       debugger
        dispatch({type: SET_SERVICES, payload: allServiceProviders})
        dispatch({type: SET_SERVICE_TARGETS_DROPDOWN, payload: targetObjs})
    })
}

