import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

export default function Burger(props) {
    return (
        <>
        <div className="Burger">
            <BurgerIngredient type="bread-top"/>
            <BurgerIngredient type="bread-bottom"/>


        </div>
        </>
    );
}