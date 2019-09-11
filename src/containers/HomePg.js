import React from 'react';
import MainMenu from './MainMenu'

const HomePg = () =>{
    return(
        <div className="health-l tb-adjust full-screen">
            <div className="tb-title"> 
            <p className="hp-title">
                WeRHere Main Menu
            </p>
            <p className="hp-mm-instructions">(click menu below)</p>

            </div>
            <MainMenu/>
            <p className="hp-instructions">
                 If you click through each menu to the map, that information will be available even when you don't have an internet connection.
            </p>
        </div>
    )
} 

export default HomePg

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
