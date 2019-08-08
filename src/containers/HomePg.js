import React from 'react';
import MainMenu from './MainMenu'

const HomePg = () =>{
    return(
        <div className="health-l full-screen">
            <p className="hp-title">
                WeRHere Main Menu
            </p>
            <p className="hp-mm-instructions">(click menu below)</p>
            <MainMenu/>
            <p className="hp-instructions">
                 If you click through each menu to the map, that information will be available even when you don't have an internet connection.
            </p>
        </div>
    )
} 

export default HomePg
