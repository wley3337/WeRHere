import React, {PureComponent} from 'react'
//library components
import { Menu, Segment } from 'semantic-ui-react'
//components
import { PrimaryCareServiceDetails } from './PrimaryCareServiceDetails';
import MapFrame from '../MapFrame';
import { Languages } from '../Languages';
import { Hours } from '../Hours';
import { phone1, phone2 } from '../../helperFunctions/HelperFunctions'

class PrimaryCareItemDetail extends PureComponent { 
    state={ activeMenuItem: 'Map'}

    setActiveMenuItem = (focus) =>{
        this.setState({
            activeMenuItem: focus
        })
    }
    
    slectedMenuItem = (location)=> {
        switch(this.state.activeMenuItem){
            case "Map":
                return (
                    <div id="map-div">
                        {location.geometry.coordinates[0] < -75 && location.geometry.coordinates[0] > -80 ?  
                            <MapFrame 
                                lat={location.geometry.coordinates[0]} 
                                long={location.geometry.coordinates[1]}
                                sprite="doctor-15"
                            />
                            :
                            <h1>No Map information available</h1>
                        }
                    </div> 
                )
            case "Services":
                return <PrimaryCareServiceDetails properties={location.properties}/> 
            case "Languages Available":
                return <Languages properties={location.properties}/>
            case "Hours":
                return <Hours properties={location.properties}/>
            default:
                return null
        }
    }

    render(){
        const  {location} = this.props
        return (!location ? null 
            :
            <div className="health-text h-detail-wrapper">
                <h1 className="name">{location.properties.NAME}</h1> 
                <p className="address">Address: { `${location.properties.ADDRESS + (location.properties.ADDRESSLINE2 ? ` ${location.properties.ADDRESSLINE2}`: "")}` }</p>

                {!location.properties.WEB_URL ? null: 
                    <div className="web-site">
                        <a href={location.properties.WEB_URL} target="_blank" rel="noopener noreferrer" >Click For Web Site</a>
                    </div>
                }

                {!location.properties.PHONE ? null :
                    <div className="phone-wrapper">
                        <p className="phone-1"> Phone: <a href={`tel: ${phone1(location)}`}>{phone1(location)}</a></p>
                        {! phone2(location) ? null :
                        <p className="phone-2"> {phone2(location).phoneType}: <a href={`tel: ${phone2(location).phoneNumber2}`}>{phone2(location).phoneNumber2}</a></p>
                        }
                    </div>
                }
                <div className="health-menu">
                    <Menu attached='top' tabular >
                        <Menu.Item 
                            name='Map' 
                            active={this.state.activeMenuItem === 'Map'} 
                            onClick={() => this.setActiveMenuItem('Map')} 
                        />
                        {!location.properties.PRIMARY_CARE_INFOHOURS_MONDAY ? null : 
                            <Menu.Item 
                                name='Hours' 
                                active={this.state.activeMenuItem === 'Hours'} 
                                onClick={() => this.setActiveMenuItem('Hours')}
                            />
                        }

                        {!location.properties.PRIMARY_CARE_INFOMEDICAL_SERVICES_AVAILABLE ? null :
                            <Menu.Item 
                                name='Services' 
                                active={this.state.activeMenuItem === 'Services'} 
                                onClick={() => this.setActiveMenuItem('Services')}
                            />
                        }
                        {!location.properties.PRIMARY_CARE_INFOENGLISH ? null :
                            <Menu.Item 
                                name='Languages Available' 
                                active={this.state.activeMenuItem === 'Languages Available'} 
                                onClick={() => this.setActiveMenuItem('Languages Available')}   
                            />
                        }
                    </Menu>
                    <Segment attached='bottom'>
                        {this.slectedMenuItem(location)}
                    </Segment>
                </div>
            </div>
        )
    }
}

export default PrimaryCareItemDetail


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