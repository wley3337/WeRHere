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
        SET_OPIOID_TREATMENT_FACILITIES,
        SET_JOYFUL_FOOD_MARKETS,
        SET_HEALTHY_CORNER_STORES,
        SET_WIC_MARKETS,
        SET_POPUP_FOCUS,
        CLEAR_POPUP_FOCUS,
        SET_HOMELESS_SHELTER_LOCATIONS,
        SET_SERVICES,
        SET_SERVICE_TARGETS_DROPDOWN,
        TOGGLE_OR_AND,
        SET_SELECTED_SERVICE_TARGET,
        REMOVE_FROM_FILTER,
        ADD_TO_FILTER,
        CLEAR_SERVICE_FILTER
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

// food reducers

const joyfulFoodMarkets = (state=[], action) =>{
    switch(action.type){
        case SET_JOYFUL_FOOD_MARKETS:
            return action.payload
        default:
            return state
    }
}

const healthyCornerStores = (state=[], action) =>{
    switch(action.type){
        case SET_HEALTHY_CORNER_STORES:
            return action.payload
        default:
            return state
    }
}

const wicMarkets = (state=[], action) =>{
    switch(action.type){
        case SET_WIC_MARKETS:
            return action.payload
        default:
            return state
    }
}

// shelter reducer

const homelessShelterLocations = (state = [], action)=>{
    switch(action.type){
        case SET_HOMELESS_SHELTER_LOCATIONS:
            return action.payload 
        default:
            return state
    }
}

// map reducer
const popupFocus = (state = {}, action)=>{
    switch(action.type){
        case SET_POPUP_FOCUS:
            return action.payload
        case CLEAR_POPUP_FOCUS:
            return {}
        default:
            return state
    }
}
// services reducer

const services = (state = [], action) =>{
    switch(action.type){
        case SET_SERVICES:
            return action.payload
        default:
            return state
    }
}

const serviceTargets =(state=[], action)=>{
    switch(action.type){
        case SET_SERVICE_TARGETS_DROPDOWN:
            return action.payload
        default:
            return state
    }
}

const selectedServiceTarget = (state="", action)=>{
    switch(action.type){
        case SET_SELECTED_SERVICE_TARGET:
            return action.payload
        default:
            return state
    }
}

const orAnd = (state= 'or', action)=>{
    switch(action.type){
        case TOGGLE_OR_AND:
            return action.payload
        default:
            return state
    }
}

const filterOptions = (state = [], action)=>{
    switch(action.type){
        case ADD_TO_FILTER:
            return [...state, action.payload]
        case REMOVE_FROM_FILTER:
            return state.filter(el => el !== action.payload)
        case CLEAR_SERVICE_FILTER:
            return []
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
    opioidTreatmentFacilities: opioidTreatmentFacilities,
    joyfulFoodMarkets: joyfulFoodMarkets,
    healthyCornerStores: healthyCornerStores,
    wicMarkets: wicMarkets,
    popupFocus: popupFocus,
    homelessShelterLocations: homelessShelterLocations,
    services: services,
    serviceTargets: serviceTargets,
    orAnd: orAnd,
    filterOptions: filterOptions,
    selectedServiceTarget: selectedServiceTarget
}

export default combineReducers(reducers)