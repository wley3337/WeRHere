import { 
    SET_CHILD_MENTAL_HEALTH_PROVIDERS, 
    SET_ADULT_MENTAL_HEALTH_PROVIDERS,
    SET_DIALYSIS_CLINICS,
    SET_PRIMARY_CARE_CENTERS,
    SET_HOSPITALS,
    SET_PHARMACIES,
    SET_HIV_CLINICS,
    SET_YOUTH_REHAB_FACILITIES,
    SET_OPIOID_TREATMENT_FACILITIES
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

//** fetch Hospital Data */

export const getHospitals = () => dispatch =>{
    //geoJson
    fetch('https://opendata.arcgis.com/datasets/6c18bb76d8644bc1bf53cac2d2199564_4.geojson')
    .then(r=> r.json())
    .then(data => {
    
        const hospitals = data.features
        dispatch({type: SET_HOSPITALS, payload: hospitals})
        
    })
}

//** fetch Pharmacies Data */

export const getPharmacies = () => dispatch =>{
    //geoJson
    fetch('https://opendata.arcgis.com/datasets/2335ba275c3f4320a3113f13181eab56_9.geojson')
    .then(r=> r.json())
    .then(data => {
        
        const pharmacies = data.features
        dispatch({type: SET_PHARMACIES, payload: pharmacies})
        
    })
}

export const getHIVClinics = () => dispatch =>{
    fetch('https://opendata.arcgis.com/datasets/b24aa2b089e5431eb360458c44ca13b4_3.geojson')
    .then(r=> r.json())
    .then(data => {
        
        const hivClinics = data.features
        dispatch({type: SET_HIV_CLINICS, payload: hivClinics})
        
    })
}

export const getYouthRehabFacilities = () => dispatch =>{
    fetch('https://opendata.arcgis.com/datasets/1d28aa7269dc40f9905912aa2e531f82_0.geojson')
    .then(r=> r.json())
    .then(data => {
       
        const youthRehabFacilities = data.features
        dispatch({type: SET_YOUTH_REHAB_FACILITIES, payload: youthRehabFacilities})
        
    })
}



export const getOpioidTreatmentFacilities = () => dispatch =>{
    fetch('https://opendata.arcgis.com/datasets/9e32b6bea7af491cb65796144e061d51_10.geojson')
    .then(r=> r.json())
    .then(data => {
        const opioidTreatmentFacilities = data.features
        dispatch({type: SET_OPIOID_TREATMENT_FACILITIES, payload: opioidTreatmentFacilities})
        
    })
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