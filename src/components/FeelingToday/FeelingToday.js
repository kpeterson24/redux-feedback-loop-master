import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


class FeelingToday extends Component {

    handleClick = () => {
        this.props.history.push('/understanding')
    }

    handleChange = (event, stepOne)=>{
        this.setState({
          ...this.state,
          [stepOne]: event.target.value
        })
      }
    render() {
        return (
            <form>
                <h2> Step 1: How are you feeling today?</h2>
                <input type="number" placeholder="From 1 to 5" />
                <button onClick={this.handleClick}>Next</button>
          </form>
        )
    }
}  

const putReduxStateOnProps = (reduxState) => ({
    reduxState
});

export default withRouter(connect(putReduxStateOnProps)(FeelingToday));