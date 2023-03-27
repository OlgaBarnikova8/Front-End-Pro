import { useState, useEffect } from "react";

const ProductsList = () => {
    const [products, setProducs] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState("smartphones");

    useEffect(() => {
        setLoading(true);
        
        fetch(`https://dummyjson.com/products/category/${activeCategory}`)
          .then(response => response.json())
          .then(data => {
            console.log(data);
            setProducs(data.products);
            setLoading(false);
          })
    }, [activeCategory]);

    if (isLoading) {
        return <p>Loading...</p>
    }

    const handleShowSmartphones = () => {
        setActiveCategory("smartphones");
    };

    const handleShowLaptops = () => {
        setActiveCategory("laptops");
    };

    return (
        <>
          <div>
            <button onClick={handleShowSmartphones}>Show smartphones</button>
            <button onClick={handleShowLaptops}>Show laptop</button>
          </div>
          <ul>
            {products.map(({ id, title}) => (
                <li key={id}>{title}</li>
            ))}
        </ul>
        </>        
    );
};

export default ProductsList;
