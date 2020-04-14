import React from 'react';
import Aux from '../../hoc/Aux';
import './Layout.css';
import Toolbar from '../Navigation/ToolBar/ToolBar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';


const layout = (props) => (

    <Aux>
        <Toolbar />
        <SideDrawer/>
        <main className="Content">
            {props.children}
        </main>
    </Aux>

);


export default layout;