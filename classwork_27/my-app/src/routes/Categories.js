import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getCategories, getProductsByCategory } from "../api";

const Categories = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [chosenCategory, setChosenCategory] = useState(
        searchParams.get("category") || "smartphones");
    const [isLoading, setLoading] = useState(true); 

    useEffect(() => {
        getCategories().then((data) => {
            setCategories(data);            
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        getProductsByCategory(chosenCategory).then((data) => {
            setProducts(data);            
            setLoading(false);
        });
    }, [chosenCategory]);

    useEffect(() => {
        setSearchParams({ category: chosenCategory });
      }, [chosenCategory]);

    if (isLoading) {
        return <p>Loading...</p>
    }

    const handleClick = (category) => () => {
        setChosenCategory(category);
    };

    return (
      <>
        <ul>
            {categories.map((category) => (
            <li 
              key={category}
              className={chosenCategory === category ? "active" : ""}            
              onClick={handleClick(category)}
            >
              {category}
            </li>
            ))}
        </ul>

        <div>
            <table>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                      <tr key={product.id}>
                        <td>{product.title}</td>
                        <td>{`${product.price} $`}</td>  
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </>)
};

export default Categories;
