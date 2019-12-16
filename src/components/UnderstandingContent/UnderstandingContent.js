import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


class UnderstandingContent extends Component {

    state = {
        understanding: ''
      }

    handleClick = () => {
        this.props.dispatch( { type: `SEND_UNDERSTANDING`, payload: this.state} )
        this.props.history.push('/support')
    }

    handleChange = (event) => {
        console.log('in handleChange with:', event.target.value);
        this.setState({
            understanding: event.target.value
        })
    }

    //begin render
    render() {

        return (
            <form>
            <h2> Step 2: How well are you understanding the content?</h2>
            <input type="number" onChange={(event)=>this.handleChange(event, 'understanding')} value={this.state.understanding} placeholder="From 1 to 5" />
            <button onClick={this.handleClick}>Next</button>
            </form>
        )
    }
}  

const putReduxStateOnProps = (reduxState) => ({
    reduxState
});

export default withRouter(connect(putReduxStateOnProps)(UnderstandingContent));