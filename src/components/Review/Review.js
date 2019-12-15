import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Comments extends Component {
    // will be my post route?
    submitFormData= (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'FORM_DATA', payload: this.state });
        this.props.history.push('/');
        
    }
    render() {
        // const formData = this.props.
        return (
            <form onSubmit={  (event) => this.submitFormData (event) }>
                <h2> Please Review Your Feedback</h2>
                <ul>
                    {this.props.reduxState.feelings}
                </ul>
                
                <button onClick={this.submitFormData}>Submit</button>
            </form>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
});
export default withRouter(connect(putReduxStateOnProps)(Comments));