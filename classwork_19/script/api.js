const BASE_URL = "https://jsonplaceholder.typicode.com"

export const getUsers = async () => {
    try {
      const response = await fetch(`${BASE_URL}/users`);

      if (!response.ok) {
        throw new Error();
      }

      const data = await response.json();
      return data;
    } catch (error) {
        console.log(error);
    }    
};


export const createUsers = async (formData) => {
  try {
    const response = await fetch(`${BASE_URL}/users`, {
      method: "POST",
      body: formData,
    });
    

    if (!response.ok) {
      throw new Error();
    }

    const data = await response.json();
    return data;
  } catch (error) {
      console.log(error);
  }    
};
