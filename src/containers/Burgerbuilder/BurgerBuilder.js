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
                meat:0,
                salad:0,
                bacon:0

            }
        }
    
    }

  

addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
        ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    this.setState({ingredients: updatedIngredients});
};

removeIngredientHandler(type) {
    this.setState({ingredients: this.state.ingredients[type] -1})

};

    render() {
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls ingredientAdded={this.addIngredientHandler}/>
            </Aux>
        );
    }
}