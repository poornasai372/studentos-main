import axios from "axios";

const API = "http://localhost:5000/api/timetable";

export const getTimetable = async () => {
  return axios.get(API);
};

export const addClass = async (classData) => {
  return axios.post(API, classData);
};

export const updateClass = async (id, classData) => {
  return axios.put(`${API}/${id}`, classData);
};

export const deleteClass = async (id) => {
  return axios.delete(`${API}/${id}`);
};