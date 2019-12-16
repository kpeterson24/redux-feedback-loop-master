import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Support extends Component {
    state = {
        support: ''
      }

    handleClick = () => {
        this.props.dispatch( { type: 'SUPPORT', payload: this.state} )
        this.props.history.push('/comments')
    }

    handleChange = (event) => {
        console.log('in handleChange with:', event.target.value);
        this.setState({
            support: event.target.value
        })
    }

    //begin render
    render() {
        return (
        <form onSubmit={(event)=>this.handleSubmit(event)}>
          <h2> Step 3: How well are you being supported?</h2>
          <input type="number" onChange={(event)=>this.handleChange(event, 'support')} value={this.state.support} placeholder="From 1 to 5" />
          <button type='button' onClick={this.handleClick}>Next</button>
        </form>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
});
export default withRouter(connect(putReduxStateOnProps)(Support));