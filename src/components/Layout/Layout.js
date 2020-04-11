import React from 'react';
import Aux from '../../hoc/Aux';
import './Layout.css';
import Toolbar from '../Navigation/ToolBar/ToolBar';


const layout = (props) => (

    <Aux>
        <Toolbar />
        <div>sidedrawer, bacdrawer</div>
        <main className="Content">
            {props.children}
        </main>
    </Aux>

);


export default layout;