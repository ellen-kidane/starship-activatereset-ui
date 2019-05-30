import React, { Component } from 'react';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {input: '', inputList: []};

    // This binding is necessary to make `this` work in the callback
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  };

  handleClick() {
    var inputAsList = (this.state.input).split(',');
    this.setState({ inputList: inputAsList });
  }

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
        <p>Enter rallyIDs below (separate by commas please - but no spaces):</p>
        <textarea value={this.state.input} onChange={this.handleChange} rows="25" cols="170"/>
        <div> <button onClick={this.handleClick}>Reset These Users</button> </div>

        { /* place to display the results */ }
        <div>
            <br/>
            <p>Sample results:</p>
            <ul style={{border: '0.5px solid black', paddingBottom : '5px', width: '1000px'}}>
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
                { this.state.inputList.map(item => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>

      </div>
    );
  }
}

export default Home;
