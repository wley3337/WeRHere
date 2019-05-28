import React from 'react'
import {connect} from 'react-redux'

const ShelterPopupDetail = ({popupFocus}) =>{

   if(popupFocus.properties === undefined || popupFocus.properties.OWNER_RENTER === undefined){ return null} 
    const {AGES_SERVED, HOW_TO_ACCESS, NUMBER_OF_BEDS, SUBTYPE, STATUS, TYPE, URL, LGBTQ_FOCUSED} = popupFocus.properties
    return(

        <div>
            <a href={URL} alt="Shelter's page" target="_blank" rel="noopener noreferrer">Web Site</a>
            <div>
                <div>Status: {STATUS}</div>
                <div>Number of beds: {NUMBER_OF_BEDS}</div>
                <div>Type: {TYPE}</div>
            </div>
            <div>Focus of shelter: {SUBTYPE}</div>
            <div>How to access: {HOW_TO_ACCESS}</div>
            <div>Ages served: {AGES_SERVED}</div>
            <div>LGBTQ Focused: {LGBTQ_FOCUSED || "not stated"}</div>

        </div>
    )
       

}



const mapStateToProps = (state) =>{
    return{
        popupFocus: state.popupFocus
    }
}

export default connect(mapStateToProps)(ShelterPopupDetail)

