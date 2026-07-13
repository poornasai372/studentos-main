import axios from "axios";

const API = "http://localhost:5000/api/assignments";

export const getAssignments = async () => {
  return axios.get(API);
};

export const addAssignment = async (assignment) => {
  return axios.post(API, assignment);
};

export const updateAssignment = async (id, assignment) => {
  return axios.put(`${API}/${id}`, assignment);
};

export const deleteAssignment = async (id) => {
  return axios.delete(`${API}/${id}`);
};