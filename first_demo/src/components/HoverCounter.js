import React, { Component } from 'react'
import withCounter from './withCounter'
 class HoverCounter extends Component {

    render() {
        const {count,onButtonClick} = this.props
        return (
            <div>
                
                <button onMouseOver={onButtonClick}> hovered {count} times</button>
            </div>
        )
    }
}
export default withCounter(HoverCounter,3)