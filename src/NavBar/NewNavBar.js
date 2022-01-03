import React from "react";  
import useStyles from './NewNavStyles';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { ClassNames } from "@emotion/react";
import LOGO from '../assets/LOGO.png';
import { useLocation } from 'react-router-dom';



const NewNavBar = (props) => {

    
    const classes = useStyles();
    const location = useLocation();




    function viewcart() {

        console.log('hey');

        window.location = '/cart';

              }


    return (

        <>


        <AppBar position='fixed' className={classes.appBar} color='inherit'>
            <Toolbar>
                <Typography variant='h6' className={classes.title} color='inherit'>
                <a href="/">
                <img src={LOGO} alt='Logo' height='25px' className={classes.image}/>
                </a>
                Kirabiku

                </Typography>

                <div className={classes.grow}/>


                {location.pathname !== '/cart' && (

                <div className={classes.button}>
                  <IconButton onClick={viewcart} aria-label='Show Cart items' color='inherit'>

                    <Badge  badgeContent={props.totalitems} color='secondary'/>
           
                        <ShoppingCart onClick={viewcart}/>
                 
                  </IconButton>

                    </div> )}
            </Toolbar>


        </AppBar>


        </>
    )
}

export default NewNavBar



