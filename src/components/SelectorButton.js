import React, {PureComponent} from 'react'


class SelectorButton extends PureComponent {
    render(){
        const {text, clickHandler, selected} = this.props
        const background = selected ? "selected" : "not-selected"
        return (
            <div onClick={clickHandler} className={background}>{text}</div>
        )
    }
}

export default SelectorButton