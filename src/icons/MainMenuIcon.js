import React from 'react'

export const MainMenuIcon = ({bgColorCallOut})=> {
        return(
            <div className="svg-wrapper">

                <svg  viewBox="0 0 203 173" preserveAspectRatio="xMidYMid meet"
                className="svg-content">
                    <rect className={bgColorCallOut} />
                    <polygon 
                        points="51 86, 151 86, 101 .44" 
                        className="safety-icon"
                        />
            
                    <polygon 
                        points="51.5 86, 150.5 86, 101 172" 
                        className="health-icon"
                    />
            
                    <polygon 
                        points="1 172.66, 51 86, 101 172.66"
                        className="food-icon"
                    />
                    
                    <polygon 
                        points="101 172.66, 151 86, 201 172.66"
                        className="services-icon"
                    />
                </svg>
            </div>
        )
    }
    