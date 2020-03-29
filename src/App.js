import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';




class App extends Component {

  state = {
    persons: [
      { name: "Viki", age: 28 },
      { name: "Maria", age: 23 },
      { name: "Jorge", age: 20 }
    ],
    showPersons: false,
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

  togglePersonsHnadler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary key={person.id}>
              <Person
                name={person.name}
                age={person.age}
                changed={this.nameChangedHandler} />
            </ErrorBoundary>
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Welcome to my Udemy app</h1>
        <button onClick={this.togglePersonsHnadler}>Toggle Persons</button>
        {persons}

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