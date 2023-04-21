import { createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

import '@fontsource/nunito-sans/300.css';
import '@fontsource/nunito-sans/400.css';
import '@fontsource/nunito-sans/700.css';

const theme = createTheme({
    palette: {
        primary: {
            main: blue[500],
        },
    },
    components: {        
        MuiInput: {
            styleOverrides: {
                root: {
                    paddingLeft: '15px', 
                    border: '1px solid #A1B0CC', 
                    borderRadius: '4px', 
                    fontSize: '18px' 
                }
            }
        }
    }
});

export default theme;
