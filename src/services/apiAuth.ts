import axios from 'axios';
const BackendURL = import.meta.env.VITE_API_URL;

export async function register(data: registerType) {
  try {
    const { email, lastName, firstName, password, shopName } = data;
    const response = await axios.post(`${BackendURL}user/register`, {
      firstName,
      lastName,
      email,
      password,
      shopName,
    });
    return response;
  } catch (error) {
    console.log("User Can't be Register Please try Again");
    throw error;
  }
}

export async function login(data: loginType) {
  try {
    console.log(data);

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

export async function logout() {
  try {
    await axios.post(`${BackendURL}user/logout`, { withCredentials: true });
  } catch (error) {
    console.log('Not Logout !');
    throw error;
  }
}
