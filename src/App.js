import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {

  state = {
    persons: [
      { name: "Viki", age: 28 },
      { name: "Maria", age: 23 },
      { name: "Jorge", age: 20 }
    ],

    otherState: "some other value"
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Nik", age: 57 },
        { name: "Stephanie", age: 20 }
      ]

    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 57 },
        { name: "Jorge", age: 20 }
      ]

    })
  }
  

  render() {
    return (
      <div className="App">
        <h1>Welcome to my Udemy app</h1>

         
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age} />
            <button onClick={() => this.switchNameHandler("Maximilliam")}>Switch Name</button>

            <Person
             name={this.state.persons[1].name}
             age={this.state.persons[1].age} 
             click={this.switchNameHandler.bind(this, "Dorothy")}
             changed={this.nameChangedHandler}
            />

            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age} />
          
      </div>
    );
  }
}


export default App;


     