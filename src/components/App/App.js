import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import Comments from '../Comments/Comments';
import Header from '../Header/Header';
import FeelingToday from '../FeelingToday/FeelingToday';
import Review from '../Review/Review';
import Support from '../Support/Support';
import UnderstandingContent from '../UnderstandingContent/UnderstandingContent';
import ThankYouFeedback from '../ThankYouFeedback/ThankYouFeedback';

import { HashRouter as Router, Route } from 'react-router-dom';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Route exact path='/' component={FeelingToday} />
          <Route path='/understanding' component={UnderstandingContent} />
          <Route path='/comments' component={Comments} />
          <Route path ='/review' component={Review} /> 
          <Route path ='/thankyou' component={ThankYouFeedback} /> 
          <Route path ='/support' component={Support} />
        </Router>
      </div>
    );
  }
}

export default App;
