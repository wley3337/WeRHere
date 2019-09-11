import React, { Component } from 'react';
//library components
import { Route } from  'react-router-dom';
//components
import HomePg from './HomePg';
import HealthMain from './HealthMain';
import FoodMain from './FoodMain';
import ShelterMain from './ShelterMain';
import ServiceMain from './ServiceMain'
//css files
import 'semantic-ui-css/semantic.min.css';
import '../css/index.css';
import dcFlag from '../icons/dc-map-flag.png'
import { NavBar } from '../components/NavBar';

class TabletPlusView extends Component {
  render() {
    return (
        <div className="tab-plus-wrapper">
            <div className="tab-plus-hp-wrapper">
                <HomePg />
            </div>
            <div className="container">
                <Route path="/health" render ={() => {
                    return(
                        <React.Fragment>
                        <HealthMain/>
                        {/* <NavBar section={"health"}/> */}
                        </React.Fragment>
                    )
                    }
                }/>
                <Route path="/food" render ={() => {
                    return(
                    <React.Fragment>
                        <FoodMain/>
                        {/* <NavBar section={"food"}/> */}
                    </React.Fragment>
                    )
                    }}/>
                <Route path="/shelter" render ={() => {
                    return(
                    <React.Fragment>
                        <ShelterMain/>
                        {/* <NavBar section={"shelter"}/> */}
                    </React.Fragment>
                )}}/>
                <Route path ="/services" render={() =>{
                    return(
                    <React.Fragment>
                        <ServiceMain />
                        {/* <NavBar section={"services"}/> */}
                    </React.Fragment>
                )}} />
            </div>
        </div>
    );
  }
}

export default TabletPlusView;

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