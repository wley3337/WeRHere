
export const MainMenuIcon = ({bgColorCallOut})=> {
    return(
        <div className="svg-wrapper">

            <svg  viewBox="0 0 203 173" preserveAspectRatio="xMidYMid meet"
            className="svg-content">
                <rect className={bgColorCallOut} />
                <polygon
                    points="51 86, 151 86, 101 .44"
                    className="services-icon"
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
                    className="shelter-icon"
                />
                <g>
                <rect x="35" y="104" width="134" height="35" rx="15" />
                {/* <rect points ="1 10, 10 -5" className="mini-main-icon-bg-text"></rect> */}
                    <text
                    x="38"
                    y="130"
                    className={`mini-main-icon-text`}
                    >
                        Main Menu
                </text>

                </g>

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

