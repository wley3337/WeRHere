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
// along with WeRHere.  If not, see <https://www.gnu.org/licenses/>