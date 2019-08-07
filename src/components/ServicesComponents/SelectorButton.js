import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions'

class SelectorButton extends PureComponent {
  

    render(){
        const {text, apiKey} = this.props
        const option= {text: text, apiKey: apiKey}
        const included = this.props.filterOptions.find( opt => opt.text === text)
        const background = !!included ? "selected" : "not-selected"
        const callBack = !!included ? this.props.removeFromFilter : this.props.addToFilter 
        console.log("included", included)
        return (
            <button 
                onClick={() =>callBack(option)} 
                className={background + " service-s-btn char-space"}
            >
                {text}
            </button>
           
        )
    }
}

const mSTP = (state) =>{
    return {filterOptions: state.filterOptions}
}

export default connect(mSTP, actions)(SelectorButton)