import React from 'react';
import './NavigationItems.css';
import NavigationItem from '../NavigationItems/NavigationItem';

const navigationItems = () => (
    <ul className="NavigationItems">
        <NavigationItem link="/" active={true}>Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>

    </ul>
);

export default navigationItems;