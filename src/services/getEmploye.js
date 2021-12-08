import axios from 'axios'

export const getEmploye = async () => {
  try {
    const response = await axios.get('https://randomuser.me/api/?results=10');
    return response?.data;
  } catch (err) {
    throw new Error(err)
  }
};