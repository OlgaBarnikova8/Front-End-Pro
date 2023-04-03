const API_URL = 'https://dummyjson.com';

export const getUsers = async () => {
    const responce = await fetch(`${API_URL}/users`);
    const { users } = await responce.json();
    return users;
};

export const getUserId = async (id) => {
    const responce = await fetch(`${API_URL}/users/${id}`);
    const data = await responce.json();
    return data;
};
