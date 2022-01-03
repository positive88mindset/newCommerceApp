import React from 'react'
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';








const Product_1 = () => {


        return (
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                bgcolor: '#8C3838',
                overflow: 'hidden',
                borderRadius: '12px',
                boxShadow: 1,
                fontWeight: 'bold',
                padding: '80px',
                marginTop: '90px',
              }}
            >

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: { xs: 'center', md: 'flex-start' },
                  m: 3,
                  minWidth: { md: 350 },
                }}
              >
                <Box component="span" sx={{ fontSize: 16, mt: 1 }}>
                  123 Main St, Phoenix AZ
                </Box>
                <Box component="span" sx={{ color: 'primary.main', fontSize: 22 }}>
                  $280,000 — $310,000
                </Box>
                <Box
                  sx={{
                    mt: 1.5,
                    p: 0.5,
                    backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.1),
                    borderRadius: '5px',
                    color: 'primary.main',
                    fontWeight: 'medium',
                    display: 'flex',
                    fontSize: 12,
                    alignItems: 'center',
                    '& svg': {
                      fontSize: 21,
                      mr: 0.5,
                    },
                  }}
                >
            
                  CONFIDENCE SCORE 85%
                </Box>
              </Box>
            </Box>
          );
    
}

export default Product_1
