import React from 'react';
import Person from '../Person/Person';


const cards = (props) => (
    props.persons.map((person, index) => {
        return <Person
            key={person.id}
            //click={this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            changed={props.nameChangedHandler} />
       
      })
);

export default cards;

























/*export default function Card (props) {
    return (
        <div >
            My favourite fruit is {props.name} and my number is {props.number}.
            <input type="text" onChange={props.changed} value={props.name}></input>
        </div>
        
    );
}*/