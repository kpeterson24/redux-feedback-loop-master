import React, { Component } from 'react';
import { connect } from 'react-redux';


class Header extends Component {

    render() {
        return (
        <header  className="App-header">
          <h1 className="App-title">Feedback!</h1>
          {JSON.stringify(this.props.reduxState)}
          <h4><i>Don't forget it!</i></h4>
        </header>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
});
export default connect(putReduxStateOnProps)(Header);