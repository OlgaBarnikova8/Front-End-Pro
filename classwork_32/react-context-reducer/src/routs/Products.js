import { useState, useEffect, useContext } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from "@mui/material";
import useCart from "../hooks/useCart";

const Products = () => {
    const { addToCart } = useCart();
    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>{
                setProducts(data);
                setLoading(false);
            }); 
    }, []);

    const handleAdd = (newProduct) => () => {
        addToCart(newProduct);
    };

    if (isLoading) {
        return (
            <Box sx={{ display: 'flex' }}>
              <CircularProgress />
            </Box>
        )
    }

    return (
        <Grid container spacing={2} mt={1}>
          {products.map((product) => (
            <Grid item xs={6} key={product.id}>
                <Card variant="outlined">
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {product.title}
                        </Typography>
                        <Typography variant="h5" component="div">
                            Price: {product.price}$
                        </Typography>          
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={handleAdd(product)}>Add to cart</Button>
                    </CardActions>
                </Card>
            </Grid>
            )
          )}                 
        </Grid>    
    )
};

export default Products;
