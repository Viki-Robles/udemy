import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

export default class BurgerBuilder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ingredients: {
                cheese: 0,
                meat: 0,
                salad: 0,
                bacon: 0

            },
            purchasable:false
        }
        

    }

    //idKey is the numbers of the ingredient like 1, 3, 0..

    updatePurchaseState() {
        const ingredients = {
            ...this.state.ingredients
        };
        const sum = Object.keys(ingredients)
            .map(idKey => {
                return ingredients[idKey];
            })
            .reduce((sum, el)=> {
                return sum + el;
            }, 0);
            this.setState({purchasable: sum > 0});
        
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        this.setState({ ingredients: updatedIngredients });
    };

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) { // we use this statement because if we dont have an ingredient it throws an error
            return;
        }
        const updatedCount = oldCount + -1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        this.setState({ ingredients: updatedIngredients });
        this.updatePurchaseState();
    };

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler} 
                    purchasable={this.state.purchasable}/>
            </Aux>
        );
    }
}