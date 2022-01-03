import React from "react";  

import { Link } from "react-router-dom";
import { Button } from '@mui/material';

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


        <li>
      <Button id="demo-positioned-button"
        onClick={''}>
          <Link className={classes.button} to='/'>Home</Link>
      </Button>
      </li>
    

        <Button id="demo-positioned-button"
        onClick={''}>
            <li className={classes.button}>
                <Link className={classes.button} to='/about'>About</Link>
            </li>
        </Button>

        <Button id="demo-positioned-button"
        onClick={''}>
            <li className={classes.button}>
                <Link className={classes.button} to='/contact'>Contact</Link>
            </li>
        </Button>


        <Button id="demo-positioned-button"
        onClick={''}>
            <li className={classes.button}>
                <Link className={classes.button} to='/shop'>Shop</Link>
            </li>
        </Button>


        <Button id="demo-positioned-button"
        onClick={''}>
            <li className={classes.button}>
                <Link className={classes.button} to='/cart'>Cart</Link>
            </li>
        </Button>




</Nav>
</header>


 </div>



    )
}

export default NavBar;
