
import axios from 'axios';
export const host = "http://localhost:5000/api/"
// export const host = "https://6z229h00-5000.inc1.devtunnels.ms/api/"

export const Post = async (url,data) => {
  try {
    const response = await axios.post(host+url, data);
    return response.data

  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
    return error?.response?.data || error?.message
  }
};
export const Get = async (url,token) => {
    try {
      const response = await axios.post(host+url, token);
      return response.data
  
    } catch (error) {
      console.error('Error:', error.response?.data || error.message);
      return error?.response?.data || error?.message
    }
  };