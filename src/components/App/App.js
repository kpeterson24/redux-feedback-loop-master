import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
        {/* Below is Step 1 Comp*/}
        <form>
          <h2> Step 1: How are you feeling today?</h2>
          <input type="number" placeholder="From 1 to 5" />
          <button>Next</button>
        </form>
        {/* Below is Step 2 Comp*/}
        <form>
          <h2> Step 2: How well are you understanding the content?</h2>
          <input type="number" placeholder="From 1 to 5" />
          <button>Next</button>
        </form>
        {/* Below is Step 3 Comp*/}
        <form>
          <h2> Step 3: How well are you being supported?</h2>
          <input type="number" placeholder="From 1 to 5" />
          <button>Next</button>
        </form>
         {/* Below is Step 4 Comp*/}
         <form>
          <h2> Step 4: Any additional comments you want to leave?</h2>
          <input type="text" placeholder="From 1 to 5" />
          <button>Next</button>
        </form>

      </div>
    );
  }
}

export default App;
