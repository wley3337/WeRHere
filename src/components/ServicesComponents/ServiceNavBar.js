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