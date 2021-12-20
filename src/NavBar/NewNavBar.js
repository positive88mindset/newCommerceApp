import React from "react";  
import useStyles from './NewNavStyles';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { ClassNames } from "@emotion/react";
import LOGO from '../assets/LOGO.png';

const NewNavBar = (props) => {

    
    const classes = useStyles();
    const Link=props.Link;

    return (

        <>


        <AppBar position='fixed' className={classes.appBar} color='inherit'>
            <Toolbar>
                <Typography variant='h6' className={classes.title} color='inherit'>
                <a href="/">
                <img src={LOGO} alt='Logo' height='25px' className={classes.image}/>
                </a>
                Fake Shop

                </Typography>

                <div className={classes.grow}/>
                <div className={classes.button}>

                  <IconButton aria-label='Show Cart items' color='inherit'>

                    <Badge badgeContent={props.totalitems} color='secondary'/>
                    <Link to='/cart'> 
                        <ShoppingCart/>
                </Link>   
                  </IconButton>

                    </div>
            </Toolbar>


        </AppBar>


        </>
    )
}

export default NewNavBar



