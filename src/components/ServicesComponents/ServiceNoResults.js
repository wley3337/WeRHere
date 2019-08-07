import React from 'react'
import { Link } from 'react-router-dom'

const ServiceNoResults = () =>{
    return(
        <div className="s-no-results-wrapper">
            <p className="s-no-results">There are no locations that provide all selected services. Please remove a filter option for more results.</p>
            <div className="s-no-results-link">
                <Link to="/services" >Back to Filter Options</Link>
            </div>
        </div>
    )
}

export default ServiceNoResults