import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


class FeelingToday extends Component {

    handleClick = () => {
        this.props.dispatch( { type: `SEND_FEEDBACK`, payload: this.state.feeling } )

        this.props.history.push('/understanding')
    }

    // sendFormInfo = () => {
    //     this.props.dispatch( { type: `SEND_FEEDBACK`, payload: this.state.feeling } )
    // }

    render() {
        return (
            <form>
                <h2> Step 1: How are you feeling today?</h2>
                <input type="number" onChange={(event)=>this.handleChange(event, 'feeling')} value={this.state.feeling} placeholder="From 1 to 5" />
                <button onClick={this.handleClick}>Next</button>
            </form>
        )
    }
}  

const putReduxStateOnProps = (reduxState) => ({
    reduxState
});

export default withRouter(connect(putReduxStateOnProps)(FeelingToday));