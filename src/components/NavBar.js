import React from 'react'
//library components
import { Link } from 'react-router-dom'
//icons
import { MainMenuIcon} from '../icons/MainMenuIcon'
import { MenuTriangle } from '../icons/MenuTriangle'

export const NavBar = ({section}) =>{
    return(
        <div className={`nav-bar ${section}-2`} >
            <Link to="/" className="nav-bar-main">
                <MainMenuIcon bgColorCallOut={`${section}-2`} />
            </Link>
            <Link to={`/${section}`} className="nav-bar-sub" >
                <MenuTriangle section={section} />
            </Link>

        </div>
    )
}
