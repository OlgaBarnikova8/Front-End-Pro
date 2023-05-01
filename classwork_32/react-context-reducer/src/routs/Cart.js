import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import useCart from '../hooks/useCart';

const Cart = () => {
    const { state: { products }, removeFromCart } = useCart();

    const handleRemove = (id) => () => { removeFromCart(id) }

    return (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Count</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Total price</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow
                  key={product.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {product.title}
                  </TableCell>
                  <TableCell>{product.count}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.count * product.price}</TableCell>
                  <TableCell><Button size="small" color="secondary" onClick={handleRemove(product.id)}>Remove</Button></TableCell>                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
};

export default Cart;
