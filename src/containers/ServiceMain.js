import React, {Component} from 'react'
//redux
import {connect} from 'react-redux'
import * as actions from '../redux/actions'
//react router
import {Route, withRouter} from 'react-router-dom'
//components
import ServiceFilterSelection from './ServiceFilterSelection';
import ServiceResults from '../components/ServicesComponents/ServiceResults';

//have a filter section .select( item => item.attributes.BORROW_MATERIALS !== null) with check boxes for a variety of properties. Then should render a multimap component by quadrent where people can click on icon for detail like in food and shelters.


class ServiceMain extends Component{
    componentDidMount(){
        this.props.getServices()
    }

    render(){
        return(
            <div className="services-2 bg-div">
                <Route exact path="/services" component={ServiceFilterSelection} />
                <Route exact path="/services/results" component={ServiceResults} />
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

export default withRouter(connect(mSTP, actions)(ServiceMain))