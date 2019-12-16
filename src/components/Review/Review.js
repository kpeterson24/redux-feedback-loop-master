import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';


class Review extends Component {

    postForm = () => {
        const formData = {
            feeling: this.props.reduxState.feeling.feeling,
            understanding: this.props.reduxState.understanding.understanding,
            support: this.props.reduxState.support.support,
            comments: this.props.reduxState.comments.comments
        }
        axios.post('/feedback', formData).then( response => {
            this.props.history.push('/success');
        }).catch(error => {
            console.log(error);
            alert(' Error adding feedback!')
            
        })
    }
    
    render() {
        
        return (
            <form onSubmit={(event) => this.submitFormData(event) }>
                <h2> Please Review Your Feedback</h2>
                {/* {JSON.stringify(this.props.reduxState.formData)} */}
                <p> Feelings: {this.props.reduxState.feeling.feeling}</p>
                <p> Understanding Content: {this.props.reduxState.understanding.understanding}</p>
                <p> Support: {this.props.reduxState.support.support}</p>
                <p> Additional Comments: {this.props.reduxState.comments.comments}</p>

                
                <button onClick={this.submitFormData}>Submit</button>
            </form>
        )
    }
}

const putReduxStateOnProps = (reduxState) => ({
    reduxState
});
export default withRouter(connect(putReduxStateOnProps)(Review));