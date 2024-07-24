import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

// Funciones para el lado del empleado

export const getCurrentEmployee = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/empleado/current-employee`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener datos del empleado:', error);
    throw error;
  }
};

export const updateEmployee = async (employeeData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/empleado/${employeeData._id}`, employeeData);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar datos del empleado:', error);
    throw error;
  }
};

export const deleteEmployeeAccount = async (employeeId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/empleado/${employeeId}`);
    return response.data;
  } catch (error) {
    console.error('Error al eliminar cuenta del empleado:', error);
    throw error;
  }
};

export const getAnimalsByZone = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/empleado/animales-zona`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener animales de la zona:', error);
    throw error;
  }
};

// Funciones para el lado del administrador

export const getAdmins = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/admin`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener administradores:', error);
    throw error;
  }
};

export const createAdmin = async (adminData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/admin`, adminData);
    return response.data;
  } catch (error) {
    console.error('Error al crear administrador:', error);
    throw error;
  }
};

export const deleteAdmin = async (adminId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/admin/${adminId}`);
    return response.data;
  } catch (error) {
    console.error('Error al eliminar administrador:', error);
    throw error;
  }
};

// Funciones para zoológicos

export const getZoos = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/zoo`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener zoológicos:', error);
    throw error;
  }
};

export const createZoo = async (zooData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/zoo`, zooData);
    return response.data;
  } catch (error) {
    console.error('Error al crear zoológico:', error);
    throw error;
  }
};

export const deleteZoo = async (zooId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/zoo/${zooId}`);
    return response.data;
  } catch (error) {
    console.error('Error al eliminar zoológico:', error);
    throw error;
  }
};

// Funciones para animales

export const getAnimals = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/animal`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener animales:', error);
    throw error;
  }
};

export const createAnimal = async (animalData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/animal`, animalData);
    return response.data;
  } catch (error) {
    console.error('Error al crear animal:', error);
    throw error;
  }
};

export const deleteAnimal = async (animalId) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/animal/${animalId}`);
    return response.data;
  } catch (error) {
    console.error('Error al eliminar animal:', error);
    throw error;
  }
};
