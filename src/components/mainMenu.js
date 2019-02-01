import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import { Link } from 'react-router-dom'


const MainMenu= (props) =>{
    return(
        <svg viewBox="0 0 203 173">
        <Link to="/safety" alt="safety">
          <polygon 
              points="51 86, 151 86, 101 .44" 
              className="safety-icon"
            />
          <text 
            x="82.5" 
            y="61"
            className="safety-icon-text icon-text" 
            >
              Safety
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
            className="health-icon-text icon-text">
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
            className="food-icon-text icon-text" >
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
            className="shelter-icon-text icon-text">
            Shelter
          </text>
      </Link>
    </svg>
    )
}

export default connect(null, actions)(MainMenu)
