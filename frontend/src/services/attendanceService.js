import axios from "axios";

const API = `${import.meta.env.VITE_API_URL}/attendance`;

export const getAttendance = async () => {
  return axios.get(API);
};

export const addAttendance = async (data) => {
  return axios.post(API, data);
};

export const updateAttendance = async (id, data) => {
  return axios.put(`${API}/${id}`, data);
};

export const deleteAttendance = async (id) => {
  return axios.delete(`${API}/${id}`);
};