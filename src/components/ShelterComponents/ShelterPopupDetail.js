import React from 'react'
import {connect} from 'react-redux'

const ShelterPopupDetail = ({popupFocus}) =>{
   if(popupFocus.properties === undefined || popupFocus.properties.OWNER_RENTER === undefined){ return null} 
    const {AGES_SERVED, HOW_TO_ACCESS, NUMBER_OF_BEDS, SUBTYPE, STATUS, TYPE, URL, LGBTQ_FOCUSED} = popupFocus.properties
    return(
        <div className="f-detail-wrapper">
            <div className="s-detail-top">
                <div className="web-site">
                    <a href={URL} alt="Shelter's page" target="_blank" rel="noopener noreferrer">Web Site</a>
                </div>
                <div className="s-core">
                    <div>Status: {STATUS}</div>
                    <div>Number of beds: {NUMBER_OF_BEDS}</div>
                    <div>Type: {TYPE}</div>
                </div>
            </div>
            <div className="s-sub-detail-wrapper">
                <span className="s-focus">Focus of shelter:</span> <span className="s-subtype">{SUBTYPE}</span>
                <span className="s-how-to">How to access: </span><span className="s-access"> {HOW_TO_ACCESS}</span>
                <span className="s-age-served">Ages served:</span> <span className="s-age">{AGES_SERVED} </span>
                <span className="s-lgbtq">LGBTQ Focused:</span>
                <span className="s-info">{LGBTQ_FOCUSED || "not stated"} </span>
            </div>

        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        popupFocus: state.popupFocus
    }
}

export default connect(mapStateToProps)(ShelterPopupDetail)

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
