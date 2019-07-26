import React, {PureComponent} from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'

class SelectorButton extends PureComponent {
  

    render(){
        const {text} = this.props
        const selected = this.props.filterOptions.includes(text)
        const background = selected ? "selected" : "not-selected"
        const callBack = selected ? this.props.removeFromFilter : this.props.addToFilter 
        //write in a turnery using the prop as argument for the call back. Connect this component and also make two actions, an add and remove
        return (
            <div onClick={() =>callBack(text)} className={background}>{text}</div>
           
        )
    }
}

const mSTP = (state) =>{
    return {filterOptions: state.filterOptions}
}
export default connect(mSTP, actions)(SelectorButton)