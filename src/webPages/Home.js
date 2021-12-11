import React from "react";
import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';


import {Alert, Nav} from 'react-bootstrap';
import { Button } from '@mui/material';

import 'bootstrap/dist/css/bootstrap.min.css';

import useStyles from './webpage  Styles/homeStyles';


const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: green[500],
      },
    },
  });

function clickHandler(){
    

    window.location='/shop';


}

const Home = () => {

    const classes = useStyles();

    return (

        <div className={classes.welcomeStyle}>

  
            <h1>WELCOME</h1>


<section className={classes.sectionStyle}>

{/*showcase*/}

<div className="container">


<Alert variant='success'>Ready to Shop for puppies?</Alert>

<Button theme={theme} variant='contained' onClick={() => { console.log('onClick'); }}>
    
SHOP</Button>   




<img className={classes.showcaseIMG} src='https://www.rd.com/wp-content/uploads/2021/03/GettyImages-1133605325-scaled-e1617227898456.jpg' alt=''/>

</div>



</section>

     
        </div>
    )
    
}



export default Home;
