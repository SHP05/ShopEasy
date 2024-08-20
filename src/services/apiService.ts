import axios from 'axios';

const BackendURL = import.meta.env.VITE_API_URL;

export async function createService(data: createServiceType) {
  try {
    const { userId, serviceName, unit, pricePerUnit } = data;

    const response = await axios.post(
      `${BackendURL}service`,
      {
        userId,
        serviceName,
        unit,
        pricePerUnit,
      },
      { withCredentials: true }
    );

    return response;
  } catch (error) {
    console.log("Service can't created pls try Again !");
    throw error;
  }
}

export async function updateService(data: updateServiceType) {
  try {
    const { serviceName, unit, pricePerUnit, id } = data;
    const response = await axios.put(
      `${BackendURL}${id}`,
      {
        serviceName,
        unit,
        pricePerUnit,
      },
      { withCredentials: true }
    );

    return response;
  } catch (error) {
    console.log("Service can't updated pls try Again !");
    throw error;
  }
}

export async function deleteServiceApi(data: deleteServiceType) {
  try {
    const { id } = data;
    const response = await axios.delete(`${BackendURL}${id}`, {
      withCredentials: true,
    });

    return response;
  } catch (error) {
    console.log("Service can't deleted pls try Again !");
    throw error;
  }
}

export async function getServicesApi(data: getServicesType) {
  try {
    const { id } = data;
    const response = await axios.get(`${BackendURL}${id}`, {
      withCredentials: true,
    });

    return response;
  } catch (error) {
    console.log("can't get Services pls try Again !");
    throw error;
  }
}
