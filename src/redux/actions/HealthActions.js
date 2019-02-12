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
  
   // geojson:
     fetch('https://opendata.arcgis.com/datasets/04e62c8179404e3bb515d3b5bf4599e0_31.geojson')
   
    .then(r => r.json())
    .then(data => { 

        const childProviderArray = data.features
        dispatch({type: SET_CHILD_MENTAL_HEALTH_PROVIDERS, payload: childProviderArray})
    })
}


//** fetch adult mental health providers */
export const getAdultMentalHealthProviders = () => dispatch => {
    //geoJson:
    fetch('https://opendata.arcgis.com/datasets/da634bb38ffe4fa3b2e6e0391fbf1618_30.geojson')
    .then(r => r.json())
    .then(data => { 
       
        const adultProviderArray = data.features
        
        dispatch({type: SET_ADULT_MENTAL_HEALTH_PROVIDERS, payload: adultProviderArray})
    })
}


// ** fetch Dialysis Clinics

export const getDialysisClinics = () => dispatch =>{
    //geoJson:
    fetch('https://opendata.arcgis.com/datasets/45452b5fbb4a41efa44ce7c8eb3fc194_2.geojson')
    .then(r=> r.json())
    .then(data => {

        const dialysisClinics = data.features
        dispatch({type: SET_DIALYSIS_CLINICS, payload: dialysisClinics})
    })
}


//** fetch Primary Care Center Data */
export const getPrimaryCareCenters = () => dispatch =>{
    //geoJson
    fetch('https://opendata.arcgis.com/datasets/018890d7399245759f05c7932261ef44_7.geojson')
    .then(r=> r.json())
    .then(data => {
   
        const primaryCareCenters = data.features
        const adjustedPrimaryCareCenters = removeFromKey(primaryCareCenters, "PrimaryCarePt")
        dispatch({type: SET_PRIMARY_CARE_CENTERS, payload: adjustedPrimaryCareCenters})
        
    })
}