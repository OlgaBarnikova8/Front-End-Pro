import {getProductId} from "../api";
import { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';

const Product = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getProductId(productId).then((data) => {
            setProduct(data);            
            setLoading(false);
        });
    }, [productId]);

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <Link to="/products">Back to products</Link>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>{`${product.price} $`}</p>            
        </div>
    )
};

export default Product;
