import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Support extends Component {
    handleClick = () => {
        this.props.history.push('/comments')
    }
    render() {
        return (
        <form>
          <h2> Step 3: How well are you being supported?</h2>
          <input type="number" placeholder="From 1 to 5" />
          <button onClick={this.handleClick}>Next</button>
        </form>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
});
export default withRouter(connect(putReduxStateOnProps)(Support));