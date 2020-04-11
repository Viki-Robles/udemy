import React from 'react';
import './BuildControls.css';
import BuildControl from '../BuildControls/BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]

//Adding dynamically the buildcontrols
export default function BuildControls(props) {
    return (
        <div className="BuildControls">
            {controls.map(ctrl => (
                <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    added={() => props.ingredientAdded(ctrl.type)}
                    removed={() => props.ingredientRemoved(ctrl.type)} 
                    />
            ))}
            <button 
            className="OrderButton"
            disabled={!props.purchasable}>Order Now</button>
        </div>
    );
}