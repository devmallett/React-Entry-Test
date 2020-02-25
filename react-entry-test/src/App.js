/*
For this piece of the test, you will have a several CSS and ReactJS questions.
ReactJS
  1. Fill in your name and the date in the "By" line. 
  2. Add a Function to be called when the Random Number is clicked to change the Number Header State
  3. The random number needs to be between 0 and 100 and showing no decimals 
  4. Add to the log text area saying "Random Number to " and then the new number generated on a new line.  
  5. Add a Function to be called when the Increment Number is clicked to change the Number Header State
  6. If the number will be above 100 (an increment from 100 to 101) display an error stating that the maximum numver is 100 
  7. Add to the log text area saying "Incremented Number to " and then the new number generated on a new line.  
  8. Add a text area for the log state that is 10 rows in height and 100 in width. 
  9. Make sure when each button is click, they are visible in the log and each is on a different line. Wording for this is in #4 and #7.
CSS
  For the CSS portion, getting the basics is the most important which will be listed below, however if you consider yourself a web designer and want to do more than the list, please do. 
  1. Style the buttons to any extent you want to
  2. Add an image to the background that still allows you to read everything. 
  3. If the number is greater than or equal to 50, then the number header needs to be a red. If the number is below 50, then the number header needs to be a blue. 
*/


/*


  Below is the solution for World Shipping Test. Days were broken up by as follows 
        -Day 0: Pseudo Code, Brute force solution with missing styling and components 
        -Day 1: Refactor, Style 
  In the solution, text are where log messages are supposed to be rendered is not there
  Replaced the text area with table, further documentation below 

  Test added to see if buttons are rendered properly  


*/

import React from 'react';
import './App.css';
class App extends React.Component {

  constructor() {
    super();
    this.state = {
      numberHeader: 0,
      log: "Started Log at 0",
      rows: []
    };
  }
  // Add a Function to be called when the Random Number is clicked to change the Number Header State
  // The random number needs to be between 0 and 100 and showing no decimals 
  // Add to the log text area saying "Random Number to " and then the new number generated on a new line.  
  addRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const logUpdate = "Random number to " + randomNumber;
    var rows = this.state.rows;
    this.setState({
      numberHeader: randomNumber,
      log: logUpdate,
      rows: rows,
    })
    rows.push(this.state.log)
    // this.addRow.bind()
    console.log("this is random numner ", randomNumber)

  }

  // Add a Function to be called when the Increment Number is clicked to change the Number Header State
  // If the number will be above 100 (an increment from 100 to 101) display an error stating that the maximum number is 100 
  // Add to the log text area saying "Incremented Number to " and then the new number generated on a new line.  
  incrementNumber = () => {
    const randomNum = this.state.numberHeader + Math.floor(Math.random() * 100) + 1;
    const logUpdate = "Increment Number to:  " + randomNum;
    var rows = this.state.rows
    this.setState({
      numberHeader: randomNum,
      log: logUpdate,
      rows: rows,
    })
    rows.push(this.state.log)
    if  (this.state.numberHeader >= 100) {
      this.setState({
        numberHeader: 0,
        log: "Started Log at 0",
        // rows: []
      })
    }
    console.log(logUpdate);
    // alert( logUpdate);

  }
  // If the number is greater than or equal to 50, then the number header needs to be a red. If the number is below 50, then the number header needs to be a blue. 

  render() {
    /*
        -Conditional rendering statements 
        -Messy Logic, refactor required - switch statement most likely
    */
    let logText, errorText; 

          // Sets messages to blue when Number Header is between 1 and 50
          // 0 not included to help identify button click
    if (this.state.numberHeader < 50 && this.state.numberHeader > 1) {
      logText = 
      <div style={{ color: 'blue' }}><p> {this.state.log}</p>  {this.state.numberHeader}</div>

      // Sets message to red when Number Header is between 50 and 100
    } else if (this.state.numberHeader >= 50 && this.state.numberHeader < 100) {
      
      logText = <div style={{ color: 'red' }}><p>{this.state.log}</p>  {this.state.numberHeader}</div>
    } else if (this.state.numberHeader >= 100) {
      // logText = <div style={{ color: 'red' }}><p>{this.state.log}</p> {this.state.numberHeader}</div>
      errorText = <div>Max is 100</div>

    }
    return (
      <div className="App image-container container transbox">

      {/* State variables and variables impacted from color change on Number Header count */}
        <h1>{this.state.numberHeader}</h1>
        <h2 >{logText}</h2>
        <h2 >{errorText}</h2>
        <button onClick={this.addRandomNumber}> Random Number</button> &nbsp;
        <button onClick={this.incrementNumber}> Increment Number</button>
        <br></br>

        <br></br>

        {/* {/* Add a text area for the log  */}
        {/* Text area missing - replaced with table
              -Mapped a table for each random and increment number click 
              -Current bug is that when an increment number is clicked from the table, the log text does not display             
              -Text area continuted to populated [object][object], so program could not read value 
        */}

        <div className="table-styling" >
          <table>
            <tbody>
              {this.state.rows.map((r) => (
                <tr>
                  <td className="incremented-numbers">{r}</td>
                  <td><button onClick={this.addRandomNumber}>Random Number</button></td>
                  <td><button onClick={this.incrementNumber}>Increment Number</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* <button id="addBtn" onClick={this.addRandomNumber}>ADD</button>  */}
        </div>
        <p> By: Devin Mallett - 2/24/20, 2/25/20</p>
        <p>	&#169; 2019 World Shipping, Inc.</p>
      </div>
    );
  }
}

export default App;

