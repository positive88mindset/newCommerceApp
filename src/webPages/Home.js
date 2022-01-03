import React from "react";
import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';
import { Button } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import useStyles from './webpage  Styles/homeStyles';
import home1 from '../assets/Homepage/home1.png';


const theme = createTheme({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',

    palette: {
      primary: {
        main: '#FFFFFF',
      },
      secondary: {
        main: green[500],
      },
    },
  });

const Home = () => {

    const classes = useStyles();

    return (

   

<section className={classes.sectionStyle}>

{/*showcase*/}

<div className="container">








<Button theme={theme} variant='outlined' onClick={() => { console.log('onClick');    window.location = '/shop';}}>
    
SHOP</Button>   

<img className={classes.showcaseIMG} src={home1} alt=''/>

</div>



</section>

     
    
    )
    
}



export default Home;
