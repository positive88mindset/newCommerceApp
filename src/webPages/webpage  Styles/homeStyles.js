import { makeStyles, fade } from '@material-ui/styles';

const drawerWidth = 0;
  
const useStyles = makeStyles({

    welcomeStyle:{
    
        borderRadius: '20px',


        backgroundColor: '#FFF0F3',
        padding: '10px',   

        border: "10px solid #3E3659",
        height:'83%',
    },

    buttonStyle:{

        padding: '10px',   
        margin: '100px',
        color:'secondary',
      },


    divStyle:{    
    padding: '10px',   
    margin: '10px',
},


    showcaseIMG:{


    height: '60%',
    width: '60%',  

    backgroundColor: '#2C2C2C',
    padding: '20px',   
    margin: '30px',   
    fontSize:24,
    borderRadius: '300px',


},


sectionStyle:{

    backgroundColor: '#E4F4FF',
    marginLeft: '200px', 
    marginRight: '200px',   

    padding: '10px', 
    height:'90%',


}


});

export default useStyles;
