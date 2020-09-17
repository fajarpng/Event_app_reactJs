import axios from 'axios';
const URL = 'http://localhost:3300/events';

// Fetch Data
export const get = data => {
  return axios.get(`${URL + data.url}`);
};

// Post Data
export const post = data => {
  return axios.post(`${URL + data.url}`, data.body, data.config);
};

// Patch Data
export const patch = async (data) => {
  return axios.patch(`${URL + data.url}`, data.body, data.config);
};

// Delete Data
export const remove = async (data) => {
  return axios.delete(`${URL + data.url}`, data.body, data.config);
};
