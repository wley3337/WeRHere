import { combineReducers } from 'redux';
import {TRUE, FALSE, SET_CHILD_MENTAL_HEALTH_PROVIDERS } from './actions/types'


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





//combined reducers 
const reducers ={
    hypothermiaAlert: hypothermiaAlert,
    childMentalHealthProviders: childMentalHealthProviders
}

export default combineReducers(reducers)