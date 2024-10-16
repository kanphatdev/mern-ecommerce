import axios from "axios";

export const createProduct = async (token, form) =>
  await axios.post("http://localhost:5000/api/product", form, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
export const listProduct = async (token, count = 20) =>
  await axios.get(`http://localhost:5000/api/products/${count}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  export const UploadFiles = async (token, form) =>
    await axios.post("http://localhost:5000/api/images", {
      image: form
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });