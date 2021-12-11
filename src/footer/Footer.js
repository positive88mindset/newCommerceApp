import React from 'react';


import useStyles from './footerStyles';


const Footer = () => {

    const classes = useStyles();


    return (
        <div className={classes.footer}>
            

THIS IS A FOOTER


        </div>
    )
}

export default Footer;
