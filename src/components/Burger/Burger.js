import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

export default function Burger(props) {
    const transformIngredients = Object.keys(props.ingredients)
    .map(idKey => {
        return [...Array(props.ingredients[idKey])].map((_, i)=> {
            return <BurgerIngredient key={idKey+i} type={idKey}/>;
        });
    });
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