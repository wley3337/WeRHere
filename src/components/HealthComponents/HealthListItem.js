import React from 'react'
//library components
import { Link } from 'react-router-dom'

export const HealthListItem = ({ location, slug }) =>{
    return (
        <div className="li-wrapper">
            <div className="li-info">
                <Link to={`/health/mental-health/${slug}`} > 
                    {location.properties.NAME} 
                    <div id="arrow">></div>
                 </Link>
            </div>
        </div>
    )
}

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
// along with WeRHere.  If not, see <https://www.gnu.org/licenses/>.