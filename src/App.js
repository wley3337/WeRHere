import React, { Component } from 'react';
import './App.css';

//icons:
// import PWAsafety from '/icons/PWAsafety.svg'
// import PWAfood from '/icons/PWAfood.svg'
// import PWAhealth from '/icons/PWAhealth.svg'
// import PWAshelter from '/icons/PWAshelter.svg'

class App extends Component {
  // A[10; 0] B[0; 0] C[5; 8.66]
  //equilateral triangle coordinates for triangle with 10 unit sides: A[0; -100] B[-100; -100] C[-50; -14.44]
  render() {
    return (
      <div className="App">
        <svg viewBox="0 0 203 173">
            <g  onClick={()=>{console.log("safety")}} alt="safety">
              <polygon 
                  points="51 86, 151 86, 101 .44" 
                  stroke="#000"
                  strokeWidth=".080rem"
                  fill="#4AD7DC" 
                />
              <text 
                x="82.5" 
                y="61" 
                fontFamily="Lato" 
                fontSize="15">
                  Safety
              </text>
            </g>
             
            <g onClick={()=>{console.log("health")}} alt="health" >
              <polygon 
                points="51.5 86, 150.5 86, 101 172"
                stroke="#000"  
                fill="#AD49BE" 
              />
              <text 
                x="82" 
                y="118" 
                fontFamily="Lato" 
                fontSize="15">
                  Health
              </text>
            </g>
            <g onClick={()=>{console.log("food")}} alt="food" >
              <polygon 
                points="1 172.66, 51 86, 101 172.66"
                stroke="#000" 
                strokeWidth=".08rem" 
                fill="#38B981" 
              />
              <text 
                x="36" 
                y="141" 
                fontFamily="Lato" 
                fontSize="15">
                  Food
              </text>
          </g>
          <g onClick={()=>{console.log("shelter")}} alt="shelter" >
              <polygon 
                points="101 172.66, 151 86, 201 172.66"
                stroke="#000" 
                strokeWidth=".08rem" 
                fill="#FEF445" 
              />
              <text 
                x="131" 
                y="141" 
                fontFamily="Lato" 
                fontSize="15">
                Shelter
              </text>
          </g>
        </svg>
      </div>
    );
  }
}

export default App;
