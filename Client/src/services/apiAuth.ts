import axios from 'axios';
const BackendURL = import.meta.env.VITE_API_URL;

interface register {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  shopName: string;
}

interface login {
  email: string;
  password: string;
}

export async function register(data: register) {
  try {
    const response = await axios.post(
      `${BackendURL}user/register`,
      {
        data,
      },
      {
        withCredentials: true,
      }
    );
    return response;
  } catch (error) {
    console.log("User Can't be Register Please try Again");
    throw error;
  }
}

export async function login(data: login) {
  try {
    const { email, password } = data;
    const response = await axios.post(`${BackendURL}user/login`, {
      email,
      password,
    });
    return response;
  } catch (error) {
    console.log('Invalid credentials pls try Again !');
    throw error;
  }
}
