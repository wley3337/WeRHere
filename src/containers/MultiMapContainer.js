import React, {PureComponent} from 'react'
import { withRouter } from 'react-router-dom'
//redux
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
//library components
import { Menu, Segment } from 'semantic-ui-react'
//components
import MultiPointMapFrame from '../components/MultiPointMapFrame';
import MapPopupDetail from '../components/MapPopupDetail';
import ShelterPopupDetail from '../components/ShelterComponents/ShelterPopupDetail';

class MultimapContainer extends PureComponent {
    state={ activeMenuItem: 'All DC'}

    componentDidMount(){
        //clear popup focus
        this.props.clearPopupFocus()
    }
    setActiveMenuItem = (focus) =>{
        this.setState({
            activeMenuItem: focus
        })
    }
    
    slectedMenuItem = ()=> {
        switch(this.state.activeMenuItem){
            case "All DC":
                return (
                    <MultiPointMapFrame 
                        lat={-77.039003}
                        long={38.889931}
                        zoom={10}
                        sprite={this.props.sprite}
                        pointArray={this.props.locations}
                    /> )
            case "NW":
                return (
                    <MultiPointMapFrame 
                        lat={-77.06}
                        long={38.93}
                        zoom={11}
                        sprite={this.props.sprite}
                        pointArray={this.props.locations.filter(location => location.properties.ADDRESS.includes("NW"))}
                    /> )
            case "NE":
                return (
                    <MultiPointMapFrame 
                        lat={-76.970003}
                        long={38.93}
                        zoom={11}
                        sprite={this.props.sprite}
                        pointArray={this.props.locations.filter(location => location.properties.ADDRESS.includes("NE"))}
                    /> )
            case "SW":
                return (
                    <MultiPointMapFrame 
                        lat={-77.019}
                        long={38.855}
                        zoom={11.5}
                        sprite={this.props.sprite}
                        pointArray={this.props.locations.filter(location => location.properties.ADDRESS.includes("SW"))}
                    /> )
            case "SE":
                return (
                    <MultiPointMapFrame 
                        lat={-76.970003}
                        long={38.87}
                        zoom={11}
                        sprite={this.props.sprite}
                        pointArray={this.props.locations.filter(location => location.properties.ADDRESS.includes("SE"))}
                    /> )
            default:
                return null
        }
    }

    render(){
       return(
            <div className="food-text restrict-size">
                {this.props.popupFocus.properties !== undefined ?  <MapPopupDetail /> : (<div className="description">
                   {this.props.prgDescription} 
                </div>)}
               
                <ShelterPopupDetail/>
                <div>
                    <Menu attached='top' tabular className="map-menu">
                        <Menu.Item 
                            name='All DC' 
                            active={this.state.activeMenuItem === 'All DC'} 
                            onClick={() => this.setActiveMenuItem('All DC')} 
                        />
                        
                        <Menu.Item 
                            name='NW' 
                            active={this.state.activeMenuItem === 'NW'} 
                            onClick={() => this.setActiveMenuItem('NW')}
                        />
                        <Menu.Item 
                            name='NE'
                            active={this.state.activeMenuItem === 'NE'}
                            onClick={() => this.setActiveMenuItem('NE')}
                        />
                        <Menu.Item 
                            name='SW'
                            active={this.state.activeMenuItem === 'SW'}
                            onClick={() => this.setActiveMenuItem('SW')}
                        />
                        <Menu.Item 
                            name='SE'
                            active={this.state.activeMenuItem === 'SE'}
                            onClick={() => this.setActiveMenuItem('SE')}
                        />
                    </Menu>
                    <Segment attached='bottom'>
                        <div id="map-div">
                            {this.slectedMenuItem()} 
                        </div>
                    </Segment>
                </div>
            </div>
       )
    }
}

const mapStateToProps = state =>{
    return {
        popupFocus: state.popupFocus
    }
}
export default withRouter(connect(mapStateToProps, actions)(MultimapContainer))

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