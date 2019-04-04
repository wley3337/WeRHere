import React from 'react'
//redux
import { connect } from 'react-redux'

const MapPopupDetail = ({popupFocus}) =>{
    return(
        <div className="food-text">
            <p>Name: {popupFocus.properties.STORE}</p>
            <p>Address: {popupFocus.properties.ADDRESS}</p>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        popupFocus: state.popupFocus
    }
}

export default connect(mapStateToProps)(MapPopupDetail)