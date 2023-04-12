import { createTheme } from '@mui/material/styles';

import '@fontsource/nunito-sans/300.css';
import '@fontsource/nunito-sans/400.css';
import '@fontsource/nunito-sans/700.css';

const theme = createTheme({
  
  typography: {
    h1: {   
      paddingBottom: '15px',
      fontWeight: 700,
      fontSize: '24px',
      lineHeight: '33px',      
      color: '#605DEC',
    },  
    h3: { 
      paddingBottom: '35px',     
      fontSize: '18px',
      lineHeight: '25px',
      color: '#7C8DB0',
    },
    h2: { 
      paddingBottom: '25px',     
      fontSize: '18px',
      lineHeight: '25px',
      color: '#7C8DB0',
    },    
  },  
});

export default theme;
