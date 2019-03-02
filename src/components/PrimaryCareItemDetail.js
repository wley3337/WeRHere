import React, {PureComponent} from 'react'

import MapFrame from './MapFrame';
import { Menu, Segment } from 'semantic-ui-react'
import { ServiceDetails } from './ServiceDetails';
import { aptPhoneNumberFormating } from '../helperFunctions/HelperFunctions'
import { Languages } from './Languages';
import { Hours } from './Hours';

class PrimaryCareItemDetail extends PureComponent { 
    state={ activeMenuItem: 'Map'}

    setActiveMenuItem = (focus) =>{
        this.setState({
            activeMenuItem: focus
        })
    }
    
    phone1 = (location) =>{
      return  location.properties.PHONE.split(";")[0]
    }

    phone2 = (location) =>{
      return  location.properties.PHONE.split(";")[1] ? 
             aptPhoneNumberFormating(location.properties.PHONE.split(";")[1])
             : null
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
   
               <div className="health-text">
                   <h1>{location.properties.NAME}</h1> 

                    {!location.properties.WEB_URL ? null: 
                        <a href={location.properties.WEB_URL} target="_blank">Web Site</a>
                    }
                    {!location.properties.PHONE ? null :
                        <div>
                            <p> Phone: <a href={`tel: ${this.phone1(location)}`}>{this.phone1(location)}</a></p>
                            {! this.phone2(location) ? null :
                            <p> {this.phone2(location).phoneType}: <a href={`tel: ${this.phone2(location).phoneNumber2}`}>{this.phone2(location).phoneNumber2}</a></p>
                            }
                        </div>

                    }


                   <h2>Address: {`${location.properties.ADDRESS}`}</h2>
   
                   <div>

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