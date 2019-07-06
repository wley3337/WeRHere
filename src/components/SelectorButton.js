import React, {PureComponent} from 'react'


class SelectorButton extends PureComponent {
    render(){
        const {text, clickHandler, selected} = this.props
        const background = selected ? "selected" : "not-selected"
        console.log(background)

        return (
            <div onClick={clickHandler} className={background}>{text}</div>
        )
    }
}

export default SelectorButton