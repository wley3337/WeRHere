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
        if(popupFocus.properties.service){
            title = `${popupFocus.properties.service.program}   Organization: ${popupFocus.properties.service.org}`
        }
        return(
            <div className="food-text f-detail-wrapper">
                <p className="f-detail-title">Location details:</p>
                <p className="name">{title}</p>
                <p className="address">Address: <span className="space-left bold">{popupFocus.properties.ADDRESS}</span></p>
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