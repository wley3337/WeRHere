import React from 'react'
import { Link } from 'react-router-dom'
import { MainMenuIcon} from '../icons/MainMenuIcon'
import { MenuTriangle } from '../icons/MenuTriangle'

 
export const NavBar = ({section}) =>{
    return(
        <div className="ui grid inverted bottom fixed menu nav-bar">
            <Link to="/" className="eight wide column nav-bar-main">
                <MainMenuIcon bgColorCallOut={`${section}-2`} />
            </Link>
            <Link to={`/${section}`} className="eight wide column nav-bar-sub" >
                <MenuTriangle section={section} />
            </Link>

        </div>
    )
}

const sectionSelection= (sectionName) =>{
    switch (sectionName){
        case 'health':
        return 
        case 'safety':
        return 
        case 'shelter':
        return 
        case 'food':
        return 

        default:
        return null 

    }

}