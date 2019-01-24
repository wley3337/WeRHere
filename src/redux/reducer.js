import { combineReducers } from 'redux';
import {TRUE, FALSE} from './actions/types'


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


const reducers ={
    hypothermiaAlert: hypothermiaAlert
}

export default combineReducers(reducers)