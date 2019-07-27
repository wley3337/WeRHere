import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions'

class SelectorButton extends PureComponent {
  

    render(){
        const {text} = this.props
        const selected = this.props.filterOptions.includes(text)
        const background = selected ? "selected" : "not-selected"
        const callBack = selected ? this.props.removeFromFilter : this.props.addToFilter 
        return (
            <button 
                onClick={() =>callBack(text)} 
                className={background + " service-s-btn"}
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