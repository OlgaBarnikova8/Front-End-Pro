const products = [
    { title: "Gabbage", isFruit: false, id: 1 },
    { title: "Garlic", isFruit: false, id: 2 },
    { title: "Apple", isFruit: true, id: 3 },
]

const ShoppingList = () => {
    return (
        <ul>
          {products.map(({ title, isFruit, id }) => (
            <li 
              key={id}
              style={{ color: isFruit ? "brown" : "blue" }}
            >
              {title}
            </li>
            ))}
        </ul>
    );
};

export default ShoppingList;
