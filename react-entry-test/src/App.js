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


import React from 'react';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      numberHeader: 0,
      log: "Started Log at 0",
    };
  }


// Add a Function to be called when the Random Number is clicked to change the Number Header State
// The random number needs to be between 0 and 100 and showing no decimals 
// Add to the log text area saying "Random Number to " and then the new number generated on a new line.  

randomNumber = () => {
  // logChecker()
  const randomNum = Math.floor(Math.random() * 100) + 1 ;
  this.setState({
      numberHeader: randomNum,
      log: "Random Number to"
  })
  // console.log('hello world', randomNum);
  // alert('hello world');
}


// Add a Function to be called when the Increment Number is clicked to change the Number Header State
// If the number will be above 100 (an increment from 100 to 101) display an error stating that the maximum number is 100 
// Add to the log text area saying "Incremented Number to " and then the new number generated on a new line.  
incrementNumber = () =>{
  // numberChecker()
  const randomNum = Math.floor(Math.random() * 100) + 1;
  this.setState({
    numberHeader: this.state.numberHeader + randomNum,
    log: "Incremented Number to"
    })
  // if (this.state.numberHeader > 101) {
  // }
  console.log('Increment Number', this.state.numberHeader);
  // alert('this is increment');
}



// If the number is greater than or equal to 50, then the number header needs to be a red. If the number is below 50, then the number header needs to be a blue. 

  render() {
    let logText, errorText;
    if(this.state.numberHeader <= 50){
    logText = <div>{this.state.log} {this.state.numberHeader}</div> 
    } else if (this.state.numberHeader > 100){
    logText = <div style={{ color: 'red' }}>{this.state.log} {this.state.numberHeader}</div>
    errorText = <div>Max is 100</div>
    }
    


    return (
      <div className="App">
          <h1> {this.state.numberHeader}</h1>
          {logText}
          {errorText}
    
        
          <button
          onClick={this.randomNumber}> Random Number</button> &nbsp;
          <button
          onClick={this.incrementNumber}> Increment Number</button>
          <br></br>
          <br></br>
          {/* Add a text area for the log */}
          {/* {logText} */}
          <p> By: Devin Mallett - 2/23/20</p>
          <p>	&#169; 2019 World Shipping, Inc.</p>
      </div>
    );
  }
}

export default App;
