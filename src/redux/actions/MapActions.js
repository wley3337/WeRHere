import {SET_POPUP_FOCUS} from './types'

export const setPopupFocus = (location) =>{
    return {type: SET_POPUP_FOCUS, payload: location}
}