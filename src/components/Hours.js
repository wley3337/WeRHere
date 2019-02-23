import React from 'react'

export const Hours = ({properties}) =>{
    
    return(
        <div className="menu-text">
            {!properties.PRIMARY_CARE_INFOOPEN_ACCESS_SCHEDULE ? null :
                <p>Open Acces Times: {properties.PRIMARY_CARE_INFOOPEN_ACCESS_TIME}</p>
            }
            <p>Monday: {properties.PRIMARY_CARE_INFOHOURS_MONDAY}</p>
            <p>Tuesday: {properties.PRIMARY_CARE_INFOHOURS_TUESDAY}</p>
            <p>Wednesday: {properties.PRIMARY_CARE_INFOHOURS_WEDNESDAY}</p>
            <p>Thursday: {properties.PRIMARY_CARE_INFOHOURS_THURSDAY}</p>
            <p>Friday: {properties.PRIMARY_CARE_INFOHOURS_FRIDAY}</p>
            <p>Saturday: {properties.PRIMARY_CARE_INFOHOURS_SATURDAY}</p>
            <p>Sunday: {properties.PRIMARY_CARE_INFOHOURS_SUNDAY}</p>
        </div>

    )
}