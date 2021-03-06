import React, {PureComponent} from 'react'
//library components
import { Menu, Segment } from 'semantic-ui-react'
//components
import MapFrame from './MapFrame';
import { ServiceDetails } from './ServiceDetails';
// helper functions
import { phone1, phone2 } from '../helperFunctions/HelperFunctions'

class ItemDetail extends PureComponent { 
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
            return <ServiceDetails properties={location.properties}/> 

            default:
            return null
        }

    }


   render(){
        const  {location} = this.props 
        return (!location ? null 
                :
                <div className="health-text char-space">
                    <h1 className="name">{location.properties.NAME}</h1> 
                    <p className="address">Address: <span className="space-left">{ `${location.properties.ADDRESS + (location.properties.ADDRESSLINE2 ? ` ${location.properties.ADDRESSLINE2}`: "")}` }</span> </p>
                    {!location.properties.WEB_URL ? null: 
                        <a href={location.properties.WEB_URL} target="_blank" rel="noopener noreferrer" className="web-site">Web Site</a>
                    }
                    
                    {!location.properties.WEB_LINK ? null: 
                        <a href={location.properties.WEB_LINK} target="_blank" rel="noopener noreferrer" className="web-site">Web Site</a>
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
                            {!location.properties.SERVICES ? null :
                                <Menu.Item 
                                    name='Services' 
                                    active={this.state.activeMenuItem === 'Services'} 
                                    onClick={() => this.setActiveMenuItem('Services')}
                                
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

export default ItemDetail

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