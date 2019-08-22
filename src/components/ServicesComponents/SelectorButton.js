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