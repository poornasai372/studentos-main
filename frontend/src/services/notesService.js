import axios from "axios";

const API = `${import.meta.env.VITE_API_URL}/notes`;

export const getNotes = async () => {
  return axios.get(API);
};

export const addNote = async (noteData) => {
  return axios.post(API, noteData);
};

export const updateNote = async (id, noteData) => {
  return axios.put(`${API}/${id}`, noteData);
};

export const deleteNote = async (id) => {
  return axios.delete(`${API}/${id}`);
};