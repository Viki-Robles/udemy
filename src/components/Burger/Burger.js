import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

export default function Burger(props) {
    let transformIngredients = Object.keys(props.ingredients)
    .map(idKey => {
        return [...Array(props.ingredients[idKey])].map((_, i)=> {
            return <BurgerIngredient key={idKey+i} type={idKey}/>;
        });
    })
    //This is N.13
    //This will allow to the user when is an empty Burger to receive a pop up message to start filling it. 
    //This process below is creates the scenario of an empty array when all the ingredient are 0 - empty
    //.reduce() is a build array function that allows us to transform an array into something else. 
    //It receives 2 arguments past value and new value
    // the empty value is the initial array
    //then we loop to the elements with the return and add them to the initial value step by step
    .reduce((arr, el) => {
        return arr.concat(el);
    }, []);

    if (transformIngredients.length === 0) {
        transformIngredients = <p>Please start adding ingredients!</p>
    }
    return (
        <>
            <div className="Burger">
                <BurgerIngredient type="bread-top" />
                {transformIngredients}
                <BurgerIngredient type="bread-bottom" />
            </div>
        </>
    );
}