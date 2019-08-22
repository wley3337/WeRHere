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