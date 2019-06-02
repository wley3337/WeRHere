import {SET_SERVICES} from './types'

export const getServices = ()=>(dispatch)=>{
    fetch('https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Service_WebMercator/MapServer/6/query?where=1%3D1&outFields=*&outSR=4326&f=json')
    .then(r=> r.json())
    .then(data =>{
        debugger
    })
}

