import React, {Component} from 'react'
//redux
import {connect} from 'react-redux'
import * as actions from '../redux/actions'
//react router
import {Route, withRouter} from 'react-router-dom'
import ServiceNavBar from '../components/ServicesComponents/ServiceNavBar';
import ServiceTop from '../components/ServicesComponents/ServiceTop';
import ServiceMedical from '../components/ServicesComponents/ServiceMedical';
import ServiceResources from '../components/ServicesComponents/ServiceResources';
//components

//have a filter section .select( item => item.attributes.BORROW_MATERIALS !== null) with check boxes for a variety of properties. Then should render a multimap component by quadrent where people can click on icon for detail like in food and shelters.


class ServiceMain extends Component{
    componentDidMount(){
        this.props.getServices()
    }

    render(){
        return(
            <div className="services-2 bg-div">
                <ServiceNavBar/>
                <ServiceTop/>
                <ServiceResources/>
                <ServiceMedical/>
            </div>
        )
    }
}

const mSTP = (state)=>{
    return{

    }
}

export default connect(mSTP, actions)(ServiceMain)