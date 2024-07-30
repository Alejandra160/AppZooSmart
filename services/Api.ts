import axios from 'axios';

const API_URL = 'http://10.100.0.176:3000/api'; // Asegúrate de que la URL tenga el protocolo correcto

export const testAPI = async () => {
  try {
    const response = await axios.get(`${API_URL}/test`);
    return response.data;
  } catch (error) {
    console.error('Error testing API:', error);
    throw error;
  }
};

interface LoginData {
  email: string;
  password: string;
  isMobileApp: boolean;
}

// Admin login
export const loginAdmin = async (loginData: LoginData) => {
  try {
    const response = await axios.post(`${API_URL}/admin/login`, loginData);
    return response.data;
  } catch (error) {
    console.error('Error logging in admin:', error);
    throw error;
  }
};

// Obtener información del administrador
export const getAdminInfo = async (adminId: string) => {
  try {
    const response = await axios.get(`${API_URL}/admin/api/admin/${adminId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching admin info:', error);
    throw error;
  }
};

export const getAnimalsByZoo = async () => {
  try {
    const response = await axios.get(`${API_URL}/animal/byZoo`, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error('Error fetching animals by zoo:', error);
    throw error;
  }
};

export const getAnimalsByZone = async (zona: string) => {
  try {
    const response = await axios.get(`${API_URL}/animal/byZone/${zona}`, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error('Error fetching animals by zone:', error);
    throw error;
  }
};

// Employee login
export const loginEmployee = async (loginData: LoginData) => {
  try {
    const response = await axios.post(`${API_URL}/empleado/login`, loginData);
    return response.data;
  } catch (error) {
    console.error('Error logging in employee:', error);
    throw error;
  }
};

export const getAnimalsByZoneEMP = async (zone: string) => {
  try {
    const response = await fetch(`${API_URL}/empleado/animaleszona-API?zona=${zone}`);
    if (!response.ok) {
      throw new Error('Error al obtener los animales por zona');
    }
    const animals = await response.json();
    return animals;
  } catch (error) {
    console.error('Error fetching animals by zone:', error);
    throw error;
  }
};

export const getAnimalByNumericId = async (id: string | number) => {
  try {
    const response = await fetch(`${API_URL}/animal/byId/${id}`);
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('Animal no encontrado');
      } else {
        throw new Error('Error al obtener el animal');
      }
    }
    const animal = await response.json();
    return animal;
  } catch (error) {
    console.error('Error fetching animal:', error);
    throw error;
  }
};

export const updateAnimalInfo = async (id: string | number, updatedInfo: any) => {
  try {
    console.log('Sending ID:', id); // Debugging line
    console.log('Sending body:', updatedInfo); // Debugging line

    const response = await fetch(`${API_URL}/animal/updateAnimalInfo/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedInfo),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Server responded with:', errorData); // Debugging line
      throw new Error(errorData.message || 'Error al actualizar la información');
    }

    const animal = await response.json();
    return animal;
  } catch (error) {
    console.error('Error updating animal info:', error);
    throw error;
  }
};
