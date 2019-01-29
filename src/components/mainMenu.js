import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'


const mainMenu= (props) =>{
    return(
        <svg viewBox="0 0 203 173">
        <g  onClick={()=>{console.log("safety")}} alt="safety">
          <polygon 
              points="51 86, 151 86, 101 .44" 
              className="safety-icon"
            />
          <text 
            x="82.5" 
            y="61"
            className="icon-text" 
            >
              Safety
          </text>
        </g>
         
        <g onClick={()=>{console.log("health")}} alt="health" >
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
        </g>
        <g onClick={()=>{console.log("food")}} alt="food" >
          <polygon 
            points="1 172.66, 51 86, 101 172.66"
            className="food-icon"
          />
          <text 
            x="36" 
            y="141"
            className="icon-text" >
              Food
          </text>
      </g>
      <g onClick={()=>{console.log("shelter")}} alt="shelter" >
          <polygon 
            points="101 172.66, 151 86, 201 172.66"
            className="shelter-icon"
          />
          <text 
            x="131" 
            y="141" 
            className="icon-text">
            Shelter
          </text>
      </g>
    </svg>
    )
}

export default connect(null, actions)(mainMenu)
