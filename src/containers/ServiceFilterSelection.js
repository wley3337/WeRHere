import React, {Component} from 'react'
//redux
import {connect} from 'react-redux'
import * as actions from '../redux/actions'
//components
import ServiceNavBar from '../components/ServicesComponents/ServiceNavBar';
import { serviceTop, serviceMedical, serviceResources, serviceOther} from '../enumerables/ServiceFilterOptions'
import SelectorButton from '../components/ServicesComponents/SelectorButton';
import { Dropdown, Button } from 'semantic-ui-react'

class ServiceFilterSelection extends Component{
      render(){
        return(
            <div className="service-filter-selection">
                <ServiceNavBar/>
                <div className="s-f-btn-dd">
                    <Button id="services-clear-all-btn" onClick={this.props.clearServiceFilter}>Clear all filter options</Button>
                    <Dropdown
                        id="services-target-dd"
                        options={this.props.serviceTargets}
                        value={this.props.selectedServiceTarget}
                        onChange={(re,suie) => this.props.setServiceTarget(suie.value)}
                        placeholder='All Target Groups' 
                        clearable selection 
                    />
                </div>
                <div className={serviceTop.location}>
                    {serviceTop.options.map( option => <SelectorButton text={option.text} apiKey={option.apiKey} key={option.optionID}/>)}
                </div>
                <div className={serviceMedical.location}>
                    {serviceMedical.options.map( option => <SelectorButton text={option.text} apiKey={option.apiKey} key={option.optionID}/>)}
                </div>
                <div className={serviceResources.location}>
                    {serviceResources.options.map( option => <SelectorButton text={option.text} apiKey={option.apiKey} key={option.optionID}/>)}
                </div>
                <div className={serviceOther.location}>
                    {serviceOther.options.map( option => <SelectorButton text={option.text} apiKey={option.apiKey} key={option.optionID}/>)}
                </div>
            </div>
        )
    }
}

const mSTP = (state)=>{
    return{
        serviceTargets: state.serviceTargets,
        selectedServiceTarget: state.selectedServiceTarget
    }
}

export default connect(mSTP, actions)(ServiceFilterSelection)


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