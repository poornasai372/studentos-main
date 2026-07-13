import axios from "axios";

const API = "http://localhost:5000/api/ai";

export const sendMessage = async (message) => {
  const response = await axios.post(API, {
    message,
  });

  return response.data.reply;
};