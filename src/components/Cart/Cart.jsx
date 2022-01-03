import React from 'react';

import { Container, Typography, Button, Grid } from '@material-ui/core';
import useStyles from './cartStyles';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';



const Cart = ({cart , handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
    
 
    const isEmpty = !cart.line_items || !cart.line_items.length;

    const classes = useStyles();

    const EmptyCart = () => (

        <div className={classes.emptyCart}>
        <Typography variant='subtitle1'>You currently have no items in your shopping cart.
        <Link to='/shop' className={classes.link}>start adding some</Link>!
        </Typography>
        </div>
    );


    const FilledCart = () => (

        <div className={classes.initialGrid}>
        <Grid container spacing={3}>

        {cart.line_items.map((item)=>(
            <Grid item xs={12} sm={4} key={item.id}>

            <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart}/>

            </Grid>
        ))}
        </Grid>

        <div className={classes.cardDetails}>

            <Typography variant='h4'>

            Subtotal:{ cart.subtotal.formatted_with_symbol }
            </Typography>
            <div>
                <Button className={classes.emptyButton} size='large' type='button' variant='contained' color='secondary' onClick={handleEmptyCart}>Empty Cart</Button>
                <Button onClick={() => { console.log('onClick'); window.location = '/checkout';}} className={classes.checkoutButton} size='large' type='button' variant='contained' color='primary'>Checkout</Button>
            </div>


        </div>



        </div>

    );

        if(isEmpty) return (<EmptyCart></EmptyCart>)


    return (
        <Container>
            <div className='classes.toolbar' />

            <Typography className='classes.title' variant='h3' gutterBottom>Your Shopping Cart
            </Typography>

            { isEmpty ? <EmptyCart /> : <FilledCart /> }

        </Container>
    )
}

export default Cart;
