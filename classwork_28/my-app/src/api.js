const API_URL = 'https://dummyjson.com';

export const getProducts = async () => {
    const responce = await fetch(`${API_URL}/products`);
    const { products } = await responce.json();
    return products;
};

export const getProductId = async (id) => {
    const responce = await fetch(`${API_URL}/products/${id}`);
    const data = await responce.json();
    return data;
};

export const getCategories = async () => {
    const responce = await fetch(`${API_URL}/products/categories`);
    const data = await responce.json();
    return data;
};

export const getProductsByCategory = async (category) => {
    const responce = await fetch(`${API_URL}/products/category/${category}`);
    const { products } = await responce.json();
    return products;
};
