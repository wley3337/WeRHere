import React from 'react' 

export const PrimaryCareServiceDetails = ({properties}) =>{
    return(
        <div className="menu-text pc-detail-wrapper char-space">
            <p className="pc-menu-title">Medical Services Available: </p>
            
            <p className="pc-menu-ser">{properties.PRIMARY_CARE_INFOMEDICAL_SERVICES_AVAILABLE}</p>
            
            {properties.PRIMARY_CARE_INFOOTHER_SERVICES ? 
                <p className="pc-menu-other-ser">Other Services: {properties.PRIMARY_CARE_INFOOTHER_SERVICES} </p>
                : null 
            } 
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
// along with WeRHere.  If not, see <https://www.gnu.org/licenses/>