import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import BUrger from '../../components/Burger/Burger';
import Burger from '../../components/Burger/Burger';

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


    render() {
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div>Build Control</div>
            </Aux>
        );
    }
}