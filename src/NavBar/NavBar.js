import React from "react";  

import { Link } from "react-router-dom";


import Nav from 'react-bootstrap/Nav';

import useStyles from './navStyles';

import 'bootstrap/dist/css/bootstrap.min.css';

import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';

import { ShoppingCart } from '@material-ui/icons';



const NavBar = () => {

    const classes = useStyles();

    return (




<div>


<header>
<Nav className={classes.header}>

<h1>LOGO</h1>

            <li className={classes.header}>
            <Link to='/'>Home</Link>
            </li>

            <li className={classes.header}>
                <Link to='/about'>About</Link>
            </li>
            <li className={classes.header}>
                <Link to='/contact'>Contact</Link>
            </li>
            <li className={classes.header}>
                <Link to='/shop'>Shop</Link>
            </li>
            <li className={classes.header}>
                <Link to='/cart'>Cart</Link>
            </li>

</Nav>
</header>


 </div>



    )
}

export default NavBar;
