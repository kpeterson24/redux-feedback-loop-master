import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Comments extends Component {

    state = {
        understanding: ''
      }

    handleClick = () => {
        this.props.dispatch( { type: 'COMMENTS', payload: this.state} )
        this.props.history.push('/review')
    }

    handleChange = (event) => {
        console.log('in handleChange with:', event.target.value);
        this.setState({
            comments: event.target.value
        })
    }

    //begin render
    render() {
        return (
            <form onSubmit={(event)=>this.handleSubmit(event)}>
                <h2> Step 4: Any additional comments you want to leave?</h2>
                <input onChange={(event)=>this.handleChange(event)} value={this.state.comments} placeholder="Let us know!" />
                <button type='button' onClick={this.handleClick}>Next</button>
            </form>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
});
export default withRouter(connect(putReduxStateOnProps)(Comments));