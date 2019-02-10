import { 
    SET_CHILD_MENTAL_HEALTH_PROVIDERS, 
    SET_ADULT_MENTAL_HEALTH_PROVIDERS,
    SET_DIALYSIS_CLINICS,
    SET_PRIMARY_CARE_CENTERS
                                        } from './types'

//helper functions
import { removeFromKey } from '../../helperFunctions/HelperFunctions'







//health

//** fetch child mental health providers  */

export const getChildMentalHealthProviders = () => dispatch => {
    fetch('https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Service_WebMercator/MapServer/31/query?where=1%3D1&outFields=*&outSR=4326&f=json')
    .then(r => r.json())
    .then(data => { 
        // const childProviderArray = data.features.map( provider => provider.attributes)
        const childProviderArray = data.features
        dispatch({type: SET_CHILD_MENTAL_HEALTH_PROVIDERS, payload: childProviderArray})
    })
}


//** fetch adult mental health providers */
export const getAdultMentalHealthProviders = () => dispatch => {
    fetch('https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Service_WebMercator/MapServer/30/query?where=1%3D1&outFields=*&outSR=4326&f=json')
    .then(r => r.json())
    .then(data => { 
        // const adultProviderArray = data.features.map( provider => provider.attributes)
        const adultProviderArray = data.features
        
        dispatch({type: SET_ADULT_MENTAL_HEALTH_PROVIDERS, payload: adultProviderArray})
    })
}


// ** fetch Dialysis Clinics

export const getDialysisClinics = () => dispatch =>{
    fetch('https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Health_WebMercator/MapServer/2/query?where=1%3D1&outFields=*&outSR=4326&f=json')
    .then(r=> r.json())
    .then(data => {
        const dialysisClinics = data.features
        dispatch({type: SET_DIALYSIS_CLINICS, payload: dialysisClinics})
    })
}


//** fetch Primary Care Center Data */
export const getPrimaryCareCenters = () => dispatch =>{
    fetch('https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Health_WebMercator/MapServer/7/query?where=1%3D1&outFields=*&outSR=4326&f=json')
    .then(r=> r.json())
    .then(data => {
        const primaryCareCenters = data.features
        const adjustedPrimaryCareCenters = removeFromKey(primaryCareCenters, "PrimaryCarePt.")
        dispatch({type: SET_PRIMARY_CARE_CENTERS, payload: adjustedPrimaryCareCenters})
        
    })
}