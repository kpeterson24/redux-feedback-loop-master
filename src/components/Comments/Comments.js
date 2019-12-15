import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Comments extends Component {
    handleClick = () => {
        this.props.history.push('/review')
    }
    render() {
        return (
            <form>
                <h2> Step 4: Any additional comments you want to leave?</h2>
                <input type="text" placeholder="From 1 to 5" />
                <button onClick={this.handleClick}>Next</button>
            </form>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
});
export default withRouter(connect(putReduxStateOnProps)(Comments));