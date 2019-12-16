import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


class FeelingToday extends Component {

    //set state
    state = {
        feeling: ''
      }

    handleClick = () => {
        this.props.dispatch( { type: 'FEELING', payload: this.state} )
        this.props.history.push('/understanding')
    }

    handleChange = (event) => {
        console.log('in handleChange with:', event.target.value);
        this.setState({
            feeling: event.target.value
        })
    }
    render() {
        
        return (
            <form onSubmit={(event)=>this.handleSubmit(event)}>
                <h2> Step 1: How are you feeling today?</h2>
                <input type="number" onChange={(event)=>this.handleChange(event)} value={this.state.feeling} placeholder="Enter 1 to 5" />
                <button type='button' onClick={this.handleClick} >Next</button>
            </form>
        )
    }
}  

const putReduxStateOnProps = (reduxState) => ({
    reduxState
});

export default withRouter(connect(putReduxStateOnProps)(FeelingToday));