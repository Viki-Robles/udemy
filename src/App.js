import React, { Component } from 'react';
import './App.css';




class App extends Component {
  render() {

  
          
    return (
      <div>
      
      </div>
    );
  }
  
  
  }


  



export default App;








/*



new Component example:
state = {
  fruits: [
    {name: "orange", number: 8},
    {name: "lemon", number: 9},
    {name: "apple", number: 10},


  ]
}


toggleButton = () => {
  this.setState({
    fruits: [
      {name: "grapefruit", number: 1},
      {name: "mandarin", number: 2},
      {name: "grapes", number: 3}
    ]
  })
}

changeName = (event) => {
  this.setState({
    fruits: [
      {name: "grapefruit", number: 1},
      {name: "mandarin", number: 2},
      {name: event.target.value, number: 3}
    ]
  })
}

  render() {

    return (
      <div className="App">
        <h1>Welcome to my Udemy app</h1>
        <Card
        name={this.state.fruits[0].name}
        number={this.state.fruits[0].number}/>
        <button onClick={() => this.toggleButton()}>Change Fruit</button>

        <Card
        name={this.state.fruits[1].name}
        number={this.state.fruits[1].number}/>

        <Card
        name={this.state.fruits[2].name}
        number={this.state.fruits[2].number}
        changed={this.changeName}/>

        </div>
    );
  }
}

export default App;
*/