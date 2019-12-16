import React, { Component } from 'react';

class ThankYouFeedback extends Component {

    goToFeelingToday = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <>
            <h2> Thank You For Your Feedback!</h2>
            <button type='button' onClick = {this.goToFeelingToday}>Leave New Feedback!</button>
            </>
        )

    }
}

export default ThankYouFeedback;