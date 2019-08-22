import React from 'react'
//library components
import { Link } from 'react-router-dom'

const MainMenu= () =>{
  return(
    <div className="mm-div">
      <svg width="100%" height="100%" viewBox="0 0 203 173">
        <Link to="/services" alt="services">
          <polygon 
            points="51 86, 151 86, 101 .44" 
            className="services-icon"
          />
          <text 
            x="76.5" 
            y="61"
            className="services-icon-text icon-text" 
          >
           Services 
          </text>
        </Link>
        <Link to="/health" alt="health" >
          <polygon 
            points="51.5 86, 150.5 86, 101 172" 
            className="health-icon"
          />
          <text 
            x="82" 
            y="118"
            className="health-icon-text icon-text"
          >
            Health
          </text>
        </Link>
        <Link to="/food" alt="food" >
          <polygon 
            points="1 172.66, 51 86, 101 172.66"
            className="food-icon"
          />
          <text 
            x="36" 
            y="141"
            className="food-icon-text icon-text"
          >
            Food
          </text>
        </Link>
        <Link to="/shelter" alt="shelter" >
            <polygon 
              points="101 172.66, 151 86, 201 172.66"
              className="shelter-icon"
            />
            <text 
              x="131" 
              y="141" 
              className="shelter-icon-text icon-text"
            >
              Shelter
            </text>
        </Link>
      </svg>
    </div>
  )
}

export default MainMenu

// A[10; 0] B[0; 0] C[5; 8.66]
//equilateral triangle coordinates for triangle with 10 unit sides: A[0; -100] B[-100; -100] C[-50; -14.44]


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
