import { combineReducers } from 'redux';
import {
        TRUE, 
        FALSE, 
        SET_CHILD_MENTAL_HEALTH_PROVIDERS,
        SET_ADULT_MENTAL_HEALTH_PROVIDERS,
        SET_DIALYSIS_CLINICS,
        SET_PRIMARY_CARE_CENTERS,
        SET_HOSPITALS, 
        SET_PHARMACIES,
        SET_HIV_CLINICS,
        SET_YOUTH_REHAB_FACILITIES,
        SET_OPIOID_TREATMENT_FACILITIES
                                            } from './actions/types'


const hypothermiaAlert = (state = false, action) =>{
    switch(action.type){
        case TRUE:
        return state = true 

        case FALSE: 
        return state = false 

        default:
        return state 
    }
}


//health reducers 

const childMentalHealthProviders = (state = [], action) =>{
    switch(action.type){
        case SET_CHILD_MENTAL_HEALTH_PROVIDERS:
            
            return   action.payload

        default:
            return state 
    }
}

const adultMentalHealthProviders = (state = [], action) =>{
    switch(action.type){
        case SET_ADULT_MENTAL_HEALTH_PROVIDERS:
            
            return   action.payload

        default:
            return state 
    }
}

const dialysisClinics = (state = [], action ) => {

    switch(action.type){
        case SET_DIALYSIS_CLINICS:
            return action.payload

        default:
            return state
    }
}

const primaryCareCenters = (state= [], action) =>{
    switch(action.type){
        case SET_PRIMARY_CARE_CENTERS:
            return action.payload

        default:
            return state
    }

}
const hospitals = (state= [], action) =>{
    switch(action.type){
        case SET_HOSPITALS:
            return action.payload

        default:
            return state
    }

}

const pharmacies = (state=[], action) =>{
    switch(action.type){
        case SET_PHARMACIES:
            return action.payload

        default:
            return state
    }
}

const hivClinics = (state=[], action) =>{
    switch(action.type){
        case SET_HIV_CLINICS:
            return action.payload

        default:
            return state
    }
}
const youthRehabFacilities = (state=[], action) =>{
    switch(action.type){
        case SET_YOUTH_REHAB_FACILITIES:
            return action.payload

        default:
            return state
    }
}



const opioidTreatmentFacilities = (state=[], action) =>{
    switch(action.type){
        case SET_OPIOID_TREATMENT_FACILITIES:
            return action.payload

        default:
            return state
    }
}


//combined reducers 
const reducers ={
    hypothermiaAlert: hypothermiaAlert,
    childMentalHealthProviders: childMentalHealthProviders,
    adultMentalHealthProviders: adultMentalHealthProviders,
    dialysisClinics: dialysisClinics,
    primaryCareCenters: primaryCareCenters,
    hospitals: hospitals,
    pharmacies: pharmacies,
    hivClinics: hivClinics,
    youthRehabFacilities: youthRehabFacilities,
    opioidTreatmentFacilities: opioidTreatmentFacilities
}

export default combineReducers(reducers)