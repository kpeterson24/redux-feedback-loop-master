import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';


class Review extends Component {

    goToFormSuccess = () => {
        let formFeedback = {
            feeling: this.props.feeling,
            understanding: this.props.understanding,
            support: this.props.support,
            comments: this.props.comments
        }
        axios.post('/feedback', formFeedback)
        .then( response => {
            console.log(response);
            this.props.history.push('/thankyou');
        }).catch(error => {
            console.log('error with posting feedback', error);
            alert(' Error adding feedback!')
        })
    }
    
    render() {
        console.log(this.props.reduxState);

        return (
            <form onSubmit={(event) => this.goToFormSuccess(event) }>
                <h2> Please Review Your Feedback</h2>
                
                <p> Feelings: {this.props.feeling}</p>
                <p> Understanding Content: {this.props.understanding}</p>
                <p> Support: {this.props.support}</p>
                <p> Additional Comments: {this.props.comments}</p>

                
                <button type="button" onClick={this.goToFormSuccess}>Submit</button>
            </form>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    feeling: reduxState.feelingReducer.feeling,
    understanding: reduxState.understandingReducer.understanding,
    support: reduxState.supportReducer.support,
    comment: reduxState.commentsReducer.comments,
});
export default withRouter(connect(putReduxStateOnProps)(Review));