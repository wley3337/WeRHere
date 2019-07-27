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

//have a filter section .select( item => item.attributes.BORROW_MATERIALS !== null) with check boxes for a variety of properties. Then should render a multimap component by quadrent where people can click on icon for detail like in food and shelters.


class ServiceMain extends Component{
    componentDidMount(){
        this.props.getServices()
    }

    render(){
        
        return(
            <div className="services-2 bg-div">
                <ServiceNavBar/>
                <div className={serviceTop.location}>
                    {serviceTop.options.map( option => <SelectorButton text={option.text} key={option.optionID}/>)}
                </div>
                <div className={serviceMedical.location}>
                    {serviceMedical.options.map( option => <SelectorButton text={option.text} key={option.optionID}/>)}
                </div>
                <div className={serviceResources.location}>
                    {serviceResources.options.map( option => <SelectorButton text={option.text} key={option.optionID}/>)}
                </div>
                <div className={serviceOther.location}>
                    {serviceOther.options.map( option => <SelectorButton text={option.text} key={option.optionID}/>)}
                </div>
            </div>
        )
    }
}

const mSTP = (state)=>{
    return{
       
    }
}

export default connect(mSTP, actions)(ServiceMain)