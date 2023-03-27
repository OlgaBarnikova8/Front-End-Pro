import { useState } from 'react';

const data = [
    { title: "Gabbage", isFruit: false, id: 1 },
    { title: "Garlic", isFruit: false, id: 2 },
    { title: "Apple", isFruit: true, id: 3 },
]

const ShoppingList = () => {
    const [products, setProducts] = useState(data);

    const handleDelete = (id) => () => {   
      setProducts((prevState) => 
        prevState.filter((product) => product.id !== id)
      );
    };
    
    return (
        <ul>
          {products.map(({ title, isFruit, id }) => (
            <li 
              key={id}
              style={{ color: isFruit ? "brown" : "blue" }}
            >
              {title}
              <button onClick={handleDelete(id)} className="btn">Remove</button>
            </li>
            ))}
        </ul>
    );
};

export default ShoppingList;
