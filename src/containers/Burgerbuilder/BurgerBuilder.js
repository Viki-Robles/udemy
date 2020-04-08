import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import BUrger from '../../components/Burger/Burger';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

export default class BurgerBuilder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ingredients: {
                cheese: 1,
                meat:1,
                salad:2,
                bacon:1

            }
        }
    }


    render() {
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls/>
            </Aux>
        );
    }
}