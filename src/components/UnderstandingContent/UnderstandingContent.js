import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


class UnderstandingContent extends Component {
    handleClick = () => {
        this.props.history.push('/support')
    }
    render() {
        
        return (
            <form>
            <h2> Step 2: How well are you understanding the content?</h2>
            <input type="number" placeholder="From 1 to 5" />
            <button onClick={this.handleClick}>Next</button>
            </form>
        )
    }
}  

const putReduxStateOnProps = (reduxState) => ({
    reduxState
});

export default withRouter(connect(putReduxStateOnProps)(UnderstandingContent));