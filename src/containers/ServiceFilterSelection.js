import React, {Component} from 'react'
//redux
import {connect} from 'react-redux'
import * as actions from '../redux/actions'
//react router
import {Route, withRouter} from 'react-router-dom'
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
                <Button id="services-clear-all-btn" onClick={this.props.clearServiceFilter}>Clear all filter options</Button>
                <Dropdown 
                    options={this.props.serviceTargets}
                    value={this.props.selectedServiceTarget}
                    onChange={(re,suie) => this.props.setServiceTarget(suie.value)}
                    placeholder='All Target Groups' 
                    clearable selection 
                />
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