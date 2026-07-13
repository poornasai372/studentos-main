import axios from "axios";

const API = `${import.meta.env.VITE_API_URL}/pdf`;

export const uploadPDF = async (file) => {
  const formData = new FormData();

  formData.append("pdf", file);

  const response = await axios.post(
    `${API}/upload`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};