import React from 'react'

const withCounter = (Wrappedcomponent,Number) => {
    class WithCounter extends React.Component {
        constructor() {
            super();
            this.state = {
              count: 0,
            };
          }
        
          _onButtonClick = () => {
            this.setState({
              count: this.state.count + Number,
            });
          };
        render() {
            return <Wrappedcomponent count={this.state.count} onButtonClick={this._onButtonClick}  {...this.props} />
        }
    }

    return WithCounter
}

export default  withCounter


