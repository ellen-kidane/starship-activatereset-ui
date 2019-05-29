import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div className="home">

        { /* title */ }
        <div className="title-bar">
          <h1>Welcome to the Activate Reset Tool!</h1>
        </div>

        { /* description */ }
        <div>
            <p>This tool resets the activate data of the users whose rallyids are inputted in the box below.</p>
            <br/>
        </div>

        { /* place to input the rallyid(s) */ }
        <p>Please enter the rallyid(s) of the user(s) that need to be reset in the box below:</p>
        <textarea rows="25" cols="200"/>
        <div> <button type="submit">Reset These Users</button> </div>

        { /* place to display the results */ }
        <div>
            <br/>
            <p>Sample results:</p>
            <ul>
                <li>rallyID here - successful reset</li>
                <li>another rallyID - failed reset</li>
                <li>another rallyID - successful reset</li>
                <li>another rallyID - successful reset</li>
                <li>another rallyID - successful reset</li>
                <li>another rallyID - failed reset</li>
                <li>another rallyID - successful reset</li>
                <li>another rallyID - successful reset</li>
                <li>another rallyID - successful reset</li>
                <li>another rallyID - successful reset</li>
                { /* rallyID: success/failure */ }
            </ul>
        </div>

      </div>
    );
  }
}

export default Home;
