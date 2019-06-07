import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {input: '', inputList: []};

    // This binding is necessary to make `this` work in the callback
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // read in user input from text box
  handleChange(e) {
    this.setState({ input: e.target.value });
  };

  handleClick() {
    var inputAsList = (this.state.input).split(','); // get each rallyID from the user input
    var userList = inputAsList.map(item =>  // make list of rallyIDs
        ({id: item, successful: 'default = failed reset, probably waiting for response'}));
    this.setState({ inputList: userList });

    const newUserList = [];

    // for each rallyID
    for (const item in userList) {
        const IDasString = (userList[item].id).toString()
        // call curl command to reset their data
        axios.get("http://localhost:9000/callCurl/" + IDasString)
            .then( response => {
                console.log(response.data)
                // get the stdout from the curl command (will contain error message if one occurred)
                var responseSplit = response.data.toString().split(";")
                var stdoutString = responseSplit[1]
                // update the new list with whether or not reset was successful
                if (response.data.includes("successful")){
                    newUserList.push(
                        {id: userList[item].id,  successful: 'successful reset' }
                     );
                } else {
                    newUserList.push(
                        {id: userList[item].id,  successful: 'failed reset - ' + stdoutString }
                    );
                }
                this.setState({ inputList: newUserList});
            })
            // if there is an error with the request, print using console.log()
            .catch((error) => {
                console.log('error: ' + error);
             })

    }

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
        { /* as user inputs rallyID(s) into the text box, they are read in and saved */}
        <textarea value={this.state.input} onChange={this.handleChange} rows="25" cols="170"/>
        {/* and then when this button is clicked, the curl command to reset their data is called */}
        <div> <button onClick={this.handleClick}>Reset These Users</button> </div>

        { /* place to display the results */ }
        <div>
            <br/>
            <p>Results: </p>
            <ul style={{border: '0.5px solid black', paddingBottom : '5px', width: '1000px'}}>
                { /* display rallyID and whether or not reset was successful */ }
                { this.state.inputList.map( (item, index) => (
                    <li key={index}>{item.id} - {item.successful}</li>
                ))}
            </ul>
        </div>

      </div>
    );
  }

}

export default Home;
