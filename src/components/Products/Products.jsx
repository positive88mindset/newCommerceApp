import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './productsStyles';


const Products = ({ products, onAddToCart }) => {

    const classes = useStyles();

    return (

    <main className={classes.content}>

<Grid  className={classes.media} container justifyContent='center' spacing={4}>

{products.map((product)=>(

    <Grid style={{
        backgroundColor: '#000000',
      }} item key={product.id} xs={12} sm={6} md={4} lg={3}>

        <Product product={product} onAddToCart={onAddToCart}/>

        </Grid>

))}

</Grid >

    </main>  
      
      );

}

export default Products;
