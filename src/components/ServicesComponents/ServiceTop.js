import React, {PureComponent} from 'react'
//redux
import {connect} from 'react-redux'
import * as actions from '../../redux/actions'
import SelectorButton from '../SelectorButton'
import { Dropdown } from 'semantic-ui-react'


class ServiceTop extends PureComponent{
    options = () => [
        {
            text: "Food/Groceries",
            clickHandler: () => this.props.addRemoveFromFilter("FOOD_GROCERIES"),
            selected: this.props.filterOptions.includes("FOOD_GROCERIES"),
            optionID: "st-1"
        },
        {
            text: "Housing",
            clickHandler: () => this.props.addRemoveFromFilter("HOUSING"),
            selected: this.props.filterOptions.includes("HOUSING"),
            optionID: "st-2"
        },
        {
            text: "Meals",
            clickHandler: () => this.props.addRemoveFromFilter("MEALS"),
            selected: this.props.filterOptions.includes("MEALS"),
            optionID: "st-3"
        },
        {
            text: "Open to the Public",
            clickHandler: () => this.props.addRemoveFromFilter("OPEN_TO_PUBLIC"),
            selected: this.props.filterOptions.includes("OPEN_TO_PUBLIC"),
            optionID: "st-4"
        },
        {
            text: "Public Restrooms",
            clickHandler: () => this.props.addRemoveFromFilter("PUBLIC_RESTROOMS"),
            selected: this.props.filterOptions.includes("PUBLIC_RESTROOMS"),
            optionID: "st-5"
        },
        {
            text: "Refreshments",
            clickHandler: () => this.props.addRemoveFromFilter("REFRESHMENTS"),
            selected: this.props.filterOptions.includes("REFRESHMENTS"),
            optionID: "st-6"
        },
        {
            text: "Showers",
            clickHandler: () => this.props.addRemoveFromFilter("SHOWERS"),
            selected: this.props.filterOptions.includes("SHOWERS"),
            optionID: "st-7"
        },
        {
            text: "Temporary Assistance for Needy Families",
            clickHandler: () => this.props.addRemoveFromFilter("TANF_FINANCIAL_ASSISTANCE"),
            selected: this.props.filterOptions.includes("TANF_FINANCIAL_ASSISTANCE"),
            optionID: "st-8"
        }
    ]

    render(){
        return(
            <div className="service-top">
                <Dropdown 
                    options={this.props.serviceTargets}
                    value={this.props.selectedServiceTarget}
                    onChange={(re,suie) => this.props.setServiceTarget(suie.value)}
                    placeholder='All Target Groups' 
                    clearable selection 
                />
                { this.options().map( option => <SelectorButton {...option} key={option.optionID} /> ) }
                
            </div>
        )
    }
}

const mSTP = (state) =>{
    return{
        filterOptions: state.filterOptions,
        serviceTargets: state.serviceTargets,
        selectedServiceTarget: state.selectedServiceTarget
    }
}

export default connect(mSTP, actions)(ServiceTop)
