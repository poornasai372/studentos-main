import axios from "axios";

const API = `${import.meta.env.VITE_API_URL}/ai`;

export const sendMessage = async (message) => {
  const response = await axios.post(API, {
    message,
  });

  return response.data.reply;
};