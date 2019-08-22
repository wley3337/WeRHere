import React from 'react'

export const Hours = ({properties}) =>{
    const nP = "None Provided - please call"
    return(
        <div className="menu-text char-space">
            {!properties.PRIMARY_CARE_INFOOPEN_ACCESS_SCHEDULE ? null :
                <p className="char-space">Open Acces Times: {properties.PRIMARY_CARE_INFOOPEN_ACCESS_TIME}</p>
            }
            <p>Monday- {properties.PRIMARY_CARE_INFOHOURS_MONDAY.length > 1 ? properties.PRIMARY_CARE_INFOHOURS_MONDAY : nP }</p>
            <p>Tuesday- {properties.PRIMARY_CARE_INFOHOURS_TUESDAY.length > 1 ? properties.PRIMARY_CARE_INFOHOURS_TUESDAY : nP }</p>
            <p>Wednesday- {properties.PRIMARY_CARE_INFOHOURS_WEDNESDAY.length > 1 ? properties.PRIMARY_CARE_INFOHOURS_WEDNESDAY : nP}</p>
            <p>Thursday- {properties.PRIMARY_CARE_INFOHOURS_THURSDAY.length > 1 ? properties.PRIMARY_CARE_INFOHOURS_THURSDAY: nP}</p>
            <p>Friday- {properties.PRIMARY_CARE_INFOHOURS_FRIDAY.length > 1 ? properties.PRIMARY_CARE_INFOHOURS_FRIDAY : nP}</p>
            <p>Saturday- {properties.PRIMARY_CARE_INFOHOURS_SATURDAY.length > 1 ? properties.PRIMARY_CARE_INFOHOURS_SATURDAY : nP}</p>
            <p>Sunday- {properties.PRIMARY_CARE_INFOHOURS_SUNDAY.length> 1 ? properties.PRIMARY_CARE_INFOHOURS_SUNDAY: nP}</p>
        </div>
    )
}

// PRIMARY_CARE_INFOOPEN_ACCESS_SCHEDULE(pin): "Yes"
// PRIMARY_CARE_INFOOPEN_ACCESS_TIME(pin): "7:45AM-8:45AM; 12:45PM-1:45 PM or at provider's discretion"
// PRIMARY_CARE_INFOHOURS_MONDAY(pin): "7:45 AM- 4:00 PM"
// PRIMARY_CARE_INFOHOURS_TUESDAY(pin): "7:45 AM- 4:00 PM"
// PRIMARY_CARE_INFOHOURS_WEDNESDAY(pin): "7:45 AM- 4:00 PM"
// PRIMARY_CARE_INFOHOURS_THURSDAY(pin): "7:45 AM- 4:00 PM"
// PRIMARY_CARE_INFOHOURS_FRIDAY(pin): "7:45 AM- 4:00 PM"
// PRIMARY_CARE_INFOHOURS_SATURDAY(pin): "7:45 - 12:00 Noon"
// PRIMARY_CARE_INFOHOURS_SUNDAY(pin): " "


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