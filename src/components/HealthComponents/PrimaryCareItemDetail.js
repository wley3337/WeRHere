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
            <div className="health-text detail-wrapper">
                <h1 className="name">{location.properties.NAME}</h1> 
                <p className="address">Address: { `${location.properties.ADDRESS + (location.properties.ADDRESSLINE2 ? ` ${location.properties.ADDRESSLINE2}`: "")}` }</p>

                {!location.properties.WEB_URL ? null: 
                    <a href={location.properties.WEB_URL} target="_blank" rel="noopener noreferrer" className="web-site">Web Site</a>
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