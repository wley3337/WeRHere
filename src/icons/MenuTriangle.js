import React from 'react'

export const MenuTriangle = ({section}) =>{
  const servicesTextAdjustX = () =>{
    switch(section){
    case "services":
     return "57.5"
    case "food":
     return "72"
    default:
      return "64"
  }}

  return(
    <div className="svg-wrapper">
      <svg viewBox="0 0 203 173" preserveAspectRatio="xMidYMid meet" className="svg-content">
        <polygon 
            points="1 172.66, 201 172.66, 101 .44" 
            className={`${section}-icon`}
          />
        <text 
          x={servicesTextAdjustX()} 
          y="110"
          className={`${section}-icon-text icon-text mini-sub-icon-text`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
        </text>
      </svg>
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
// along with WeRHere.  If not, see <https://www.gnu.org/licenses/