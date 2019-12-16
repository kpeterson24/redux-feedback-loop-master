import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Comments extends Component {

    state = {
        comments: ''
      }

    handleClick = () => {
        this.props.dispatch( { type: 'COMMENTS', payload: this.state} )
        this.props.history.push('/review')
    }

    handleChange = (event, comments) => {
        console.log('in handleChange with:', event.target.value, comments);
        this.setState({
            [comments]: event.target.value
        })
    }

    //begin render
    render() {
        return (
            <form onSubmit={(event)=>this.handleSubmit(event)}>
                <h2> Step 4: Any additional comments you want to leave?</h2>
                <input type="text" onChange={(event)=>this.handleChange(event, 'comments')} value={this.state.comments} placeholder="Let us know!" />
                <button type='button' onClick={this.handleClick}>Next</button>
            </form>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
});
export default withRouter(connect(putReduxStateOnProps)(Comments));