import {getProducts} from "../api";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getProducts().then((data) => {
            console.log(data);
            setProducts(data);            
            setLoading(false);
        });
    }, []);

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <ul>
            {products.map(({ id, title }) => (<li key={id}><Link to={`${id}`}>{title}</Link></li>))}
        </ul>
    )
};

export default Products;
