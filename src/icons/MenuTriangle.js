import React from 'react'

export const MenuTriangle = ({section}) =>{
  const servicesTextAdjustX = section === "services" ? "57.5" : "65.8"
  return(
    <div className="svg-wrapper">
      <svg viewBox="0 0 203 173" preserveAspectRatio="xMidYMid meet" className="svg-content">
        <polygon 
            points="1 172.66, 201 172.66, 101 .44" 
            className={`${section}-icon`}
          />
        <text 
          x={servicesTextAdjustX} 
          y="110"
          className={`${section}-icon-text icon-text mini-sub-icon-text`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
        </text>
      </svg>
    </div>
  )
}