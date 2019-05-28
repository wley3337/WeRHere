import React from 'react'
//redux
import { connect } from 'react-redux'

const MapPopupDetail = ({popupFocus}) =>{
    let title;
    if(popupFocus.properties !== undefined){  
        if(popupFocus.properties.STORE){
            title = popupFocus.properties.STORE 
        }
        if(popupFocus.properties.SCHOOL){
            title = popupFocus.properties.SCHOOL 
        }
        if(popupFocus.properties.ORGANIZATION){
            title = popupFocus.properties.ORGANIZATION 
        }
        if(popupFocus.properties.OWNER_RENTER){
            title = popupFocus.properties.FACILITY_NAME
        }
        return(
            <div className="food-text">
                <p>Location details:</p>
                <p>Name: {title}</p>
                <p>Address: {popupFocus.properties.ADDRESS}</p>
            </div>
        )
    }else{
        return null
    }
}

const mapStateToProps = (state) =>{
    return{
        popupFocus: state.popupFocus
    }
}

export default connect(mapStateToProps)(MapPopupDetail)