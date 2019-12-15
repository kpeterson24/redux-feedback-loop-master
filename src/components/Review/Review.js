import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Comments extends Component {
    // will be my post route?
    // submitFormData = () => {
    //     axios({
    //         method: 'POST',
    //         url: '/api/order',
    //         data: {...this.props.reduxState.}
    //     }).catch((err)=>{
    //         console.log(err);
    //     });
    // }
    render() {
        // const formData = 
        //     this.props.reduxState.feelings,

        
        return (
            <form onSubmit={ (event) => this.submitFormData(event) }>
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