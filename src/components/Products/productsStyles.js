
import { makeStyles } from '@material-ui/core/styles';





export default makeStyles((theme) => ({

  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
  },
  root: {
    flexGrow: 1,
  },

/////not from e commerce video  

media: {

  marginTop:'20px',
    padding:'80px',

    backgroundColor: '#DDDBE3',

    height: 0,
    paddingTop: '5.25%', // 16:9
    height:'100px',

  },

  palette: {

  backgroundColor: '#000000',
  height:'100px',

  },


  grid: {

    backgroundColor: '#000000',
  }
  

}));



