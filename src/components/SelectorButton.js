import React, {PureComponent} from 'react'


class SelectorButton extends PureComponent {
    render(){
        const {text, clickHandler, selected} = this.props
        const background = selected ? "selected" : "not-selected"
        //write in a turnery using the prop as argument for the call back. Connect this component and also make two actions, an add and remove
        return (
            <div onClick={clickHandler} className={background}>{text}</div>
        )
    }
}

export default SelectorButton