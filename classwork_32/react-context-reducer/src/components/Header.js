import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import useCart from '../hooks/useCart';

const Header = () => {
  const { state } = useCart();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>     
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>            
              <Button sx={{ my: 2, color: 'white', display: 'block' }}
              component={RouterLink} to="/">
                Products
              </Button> 

              <Button sx={{ my: 2, color: 'white', display: 'block' }}
              component={RouterLink} to="cart">
                Cart
              </Button>           
          </Box>

          <Box  ml={1}>
            <Typography>{state.amount} items</Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
