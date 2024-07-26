import axios from 'axios';

const API_URL = 'http://192.168.3.3:3000/api';

export const testAPI = async () => {
  try {
    const response = await axios.get(`${API_URL}/test`);
    return response.data;
  } catch (error) {
    console.error('Error testing API:', error);
    throw error;
  }
};

interface AdminData {
  name: string;
  email: string;
  password: string;
  nameZoo: string;
  country: string;
  state: string;
  city: string;
  address: string;
  isMobileApp: boolean;
}

interface LoginData {
  email: string;
  password: string;
  isMobileApp: boolean;
}

interface AnimalData {
  nombre: string;
  descripcion: string;
  dieta: string;
  info_adicional: string;
  fecha_nacimiento: string;
  fecha_arrivo: string;
  zona: string;
}

interface EmployeeData {
  name: string;
  birthdate: string;
  email: string;
  password: string;
  zone: string;
  dateAdded: string;
}

interface ZooData {
  name: string;
  country: string;
  state: string;
  city: string;
  address: string;
  adminId: string;
}

// Admin routes
export const createAdminAccount = async (adminData: AdminData) => {
  try {
    const response = await axios.post(`${API_URL}/admin/create-account`, adminData);
    return response.data;
  } catch (error) {
    console.error('Error creating admin account:', error);
    throw error;
  }
};

export const loginAdmin = async (loginData: LoginData) => {
  try {
    const response = await axios.post(`${API_URL}/admin/login`, loginData);
    return response.data;
  } catch (error) {
    console.error('Error logging in admin:', error);
    throw error;
  }
};

export const getAdminById = async (adminId: string) => {
  try {
    const response = await axios.get(`${API_URL}/admin/api/admin/${adminId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching admin by ID:', error);
    throw error;
  }
};

export const deleteAdmin = async (adminId: string) => {
  try {
    const response = await axios.delete(`${API_URL}/admin/${adminId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting admin:', error);
    throw error;
  }
};

// Animal routes
export const createAnimal = async (animalData: AnimalData) => {
  try {
    const response = await axios.post(`${API_URL}/animal/create-animal`, animalData);
    return response.data;
  } catch (error) {
    console.error('Error creating animal:', error);
    throw error;
  }
};

export const getAnimalsByZoo = async () => {
  try {
    const response = await axios.get(`${API_URL}/animal/byZoo`);
    return response.data;
  } catch (error) {
    console.error('Error fetching animals by zoo:', error);
    throw error;
  }
};

export const getAnimalById = async (animalId: string) => {
  try {
    const response = await axios.get(`${API_URL}/animal/${animalId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching animal by ID:', error);
    throw error;
  }
};

export const updateAnimal = async (animalId: string, updateData: Partial<AnimalData>) => {
  try {
    const response = await axios.put(`${API_URL}/animal/${animalId}`, updateData);
    return response.data;
  } catch (error) {
    console.error('Error updating animal:', error);
    throw error;
  }
};

export const deleteAnimal = async (animalId: string) => {
  try {
    const response = await axios.delete(`${API_URL}/animal/${animalId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting animal:', error);
    throw error;
  }
};

// Employee routes
export const createEmployee = async (employeeData: EmployeeData) => {
  try {
    const response = await axios.post(`${API_URL}/empleado/create-employee`, employeeData);
    return response.data;
  } catch (error) {
    console.error('Error creating employee:', error);
    throw error;
  }
};

export const loginEmployee = async (loginData: LoginData) => {
  try {
    const response = await axios.post(`${API_URL}/empleado/login`, loginData);
    return response.data;
  } catch (error) {
    console.error('Error logging in employee:', error);
    throw error;
  }
};

export const getCurrentEmployee = async () => {
  try {
    const response = await axios.get(`${API_URL}/empleado/current-employee`);
    return response.data;
  } catch (error) {
    console.error('Error fetching current employee:', error);
    throw error;
  }
};

export const getEmployeesByZone = async (zone: string) => {
  try {
    const response = await axios.get(`${API_URL}/empleado/zone/${zone}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching employees by zone:', error);
    throw error;
  }
};

export const deleteEmployee = async (employeeId: string) => {
  try {
    const response = await axios.delete(`${API_URL}/empleado/delete-employee/${employeeId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting employee:', error);
    throw error;
  }
};

export const getAnimalsByZone = async () => {
  try {
    const response = await axios.get(`${API_URL}/empleado/animales-zona`);
    return response.data;
  } catch (error) {
    console.error('Error fetching animals by zone:', error);
    throw error;
  }
};

// Zoo routes
export const createZoo = async (zooData: ZooData) => {
  try {
    const response = await axios.post(`${API_URL}/zoo/api/create-zoo`, zooData);
    return response.data;
  } catch (error) {
    console.error('Error creating zoo:', error);
    throw error;
  }
};
