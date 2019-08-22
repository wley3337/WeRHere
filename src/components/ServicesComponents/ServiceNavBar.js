import React from 'react'
//redux
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react';

const ServiceNavBar = ({filterOptions}) => {
    const selectedFOText = filterOptions.map(option => option.text)
    const displayText = selectedFOText.length > 0 ? selectedFOText.join(" and ") : "select options below"
    
    return(
        <div className="service-navbar">
            <div id="service-fo-display">
                Click on search button for services that have: <span className="s-fo-disp-text char-space">{displayText}</span>
            </div> 
            <Link to="/services/results" id="service-search">
                <Button id="service-search-btn">Search</Button>
            </Link> 
        </div>
    )
}

const mSTP = (state) =>{
    return{
        filterOptions: state.filterOptions
    }
}

export default connect(mSTP)(ServiceNavBar)


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