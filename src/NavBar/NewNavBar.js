import React from "react";  
import useStyles from './NewNavStyles';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { ClassNames } from "@emotion/react";
import Logo_final from '../assets/Logo_final.png';

const NewNavBar = (props) => {

    
    const classes = useStyles();

    return (

        <>

        <AppBar position='fixed' className={classes.appBar} color='inherit'>
            <Toolbar>

                <Typography variant='h6' className={classes.title} color='inherit'>
                <img src='' alt='Commerce.js' height='25px' className={classes.image}/>

                Fake Shop

                </Typography>

                <div className={classes.grow}/>
                <div className={classes.button}>
                  
                  <IconButton aria-label='Show Cart items' color='inherit'>

                    <Badge badgeContent={props.totalitems} color='secondary'>
                        <ShoppingCart/>
                    </Badge>

                  </IconButton>
                  
                    </div>
            </Toolbar>


        </AppBar>


        </>
    )
}

export default NewNavBar
