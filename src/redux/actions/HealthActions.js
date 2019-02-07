import { 
    SET_CHILD_MENTAL_HEALTH_PROVIDERS, 
    SET_ADULT_MENTAL_HEALTH_PROVIDERS
                                        } from './types'







//health

//** fetch child mental health providers  */

export const getChildMentalHealthProviders = () => dispatch => {
    fetch('https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Service_WebMercator/MapServer/31/query?where=1%3D1&outFields=*&outSR=4326&f=json')
    .then(r => r.json())
    .then(data => { 
        const childProviderArray = data.features.map( provider => provider.attributes)
        
        dispatch({type: SET_CHILD_MENTAL_HEALTH_PROVIDERS, payload: childProviderArray})
    })
}


//** fetch adult mental health providers */
export const getAdultMentalHealthProviders = () => dispatch => {
    fetch('https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Service_WebMercator/MapServer/30/query?where=1%3D1&outFields=*&outSR=4326&f=json')
    .then(r => r.json())
    .then(data => { 
        const adultProviderArray = data.features.map( provider => provider.attributes)
        
        dispatch({type: SET_ADULT_MENTAL_HEALTH_PROVIDERS, payload: adultProviderArray})
    })
}