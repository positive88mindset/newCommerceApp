import React from 'react'
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import home1 from '../../../assets/Homepage/home1.png';
import { Button } from '@mui/material';

const NewHome = () => {
    
    return (
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'column' },
            alignItems: 'center',
            bgcolor: '#C60000',
            overflow: 'hidden',
            borderRadius: '12px',
            boxShadow: 1,
            fontWeight: 'bold',
            minHeight: 700,
            
          }}
        >

          <Box
            sx={{

            bgcolor: '#000000',
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'center' },
              m: 3,
              minWidth: { md: 350 },
         
            }}
          >

<Box
        component="img"
        sx={{

       
          height: 1,
          width: 1,
          maxHeight: { xs: 0.5, md: 0.5 },
          maxWidth: { xs: 0.9, md: 0.5 },
        }}
        alt="Homepage image"
        src={home1}

      />


{/*Button */}

<Box

sx={{
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',

    overflow: 'visible',
    fontWeight: 'bold',
    minHeight: 50,
    position: 'fixed',
    top:{xs:820, md:450   }, 
    zIndex: 'tooltip',
  }}



>


<Button variant='outlined' onClick={() => { console.log('onClick'); window.location = '/shop';}}

sx={{
    bottom: 250,
    fontSize:'100px',
    color: 'white',

}}

>
    
SHOP</Button>   

</Box>

          </Box>
        </Box>
      );
}

export default NewHome
