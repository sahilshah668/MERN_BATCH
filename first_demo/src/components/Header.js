import React, { Component } from 'react'

 class Header extends Component {

    render() {
        const {title,bool} = this.props
        return (
            <div>
                <h1>{title}</h1>
                {bool ? <h3>Bool</h3> : null}
            </div>
        )
    }
}

export default Header