import React, {PureComponent} from 'react'
//redux
import {connect} from 'react-redux'
import * as actions from '../../redux/actions'
import SelectorButton from '../SelectorButton';

// ART_THERAPY(pin):null
// DOMESTIC_VIOLENCE_SERVICES(pin):null
// DENTAL_SERVICES(pin):null
// GROUPS(pin):null
// HARM_REDUCTION(pin):null
// HIV_TESTING(pin):null
// MEDICAL_BENEFITS(pin):null
// MENTAL_HEALTH(pin):null
// MEDICAL_SERVICES(pin):null
// SUBSTANCE_ABUSE_TREATMENT(pin):null

class ServiceMedical extends PureComponent{
    options = () => [
        {
            text: "Art Therapy",
            clickHandler: () => this.props.addRemoveFromFilter("ART_THERAPY"),
            selected: this.props.filterOptions.includes("ART_THERAPY"),
            optionID: "sm-1"
        },
        {
            text: "Domestic Violence Services",
            clickHandler: () => this.props.addRemoveFromFilter("DOMESTIC_VIOLENCE_SERVICES"),
            selected: this.props.filterOptions.includes("DOMESTIC_VIOLENCE_SERVICES"),
            optionID: "sm-2"
        },
        {
            text: "Dental",
            clickHandler: () => this.props.addRemoveFromFilter("DENTAL_SERVICES"),
            selected: this.props.filterOptions.includes("DENTAL_SERVICES"),
            optionID: "sm-3"
        },
        {
            text: "Harm Reduction",
            clickHandler: () => this.props.addRemoveFromFilter("HARM_REDUCTION"),
            selected: this.props.filterOptions.includes("HARM_REDUCTION"),
            optionID: "sm-4"
        },
        {
            text: "HIV Testing",
            clickHandler: () => this.props.addRemoveFromFilter("HIV_TESTING"),
            selected: this.props.filterOptions.includes("HIV_TESTING"),
            optionID: "sm-5"
        },
        {
            text: "Medical Benefits",
            clickHandler: () => this.props.addRemoveFromFilter("MEDICAL_BENEFITS"),
            selected: this.props.filterOptions.includes("MEDICAL_BENEFITS"),
            optionID: "sm-6"
        },
        {
            text: "Mental Health",
            clickHandler: () => this.props.addRemoveFromFilter("MENTAL_HEALTH"),
            selected: this.props.filterOptions.includes("MENTAL_HEALTH"),
            optionID: "sm-7"
        },
        {
            text: "Medical Services",
            clickHandler: () => this.props.addRemoveFromFilter("MEDICAL_SERVICES"),
            selected: this.props.filterOptions.includes("MEDICAL_SERVICES"),
            optionID: "sm-8"
        },
        {
            text: "Substance Abuse Treatment",
            clickHandler: () => this.props.addRemoveFromFilter("SUBSTANCE_ABUSE_TREATMENT"),
            selected: this.props.filterOptions.includes("SUBSTANCE_ABUSE_TREATMENT"),
            optionID: "sm-9"
        }
    ]
    render(){
        return(
            <div className="service-medical">
                <p id="service-ms-title">Medical Services Offered</p>
                { this.options().map( option => <SelectorButton {...option} key={option.optionID} /> ) }
            </div>
        )
    }
}

const mSTP = (state) =>{
    return{
        filterOptions: state.filterOptions
    }
}

export default connect(mSTP, actions)(ServiceMedical)