import axios from "axios";

export const post = async (payload) => {
  const response = await axios.post(baseUrl, payload);
  console.log("postBooks");
  console.log(response);
  return response.data;
};

export const get = async () => {
  const response = await axios.get(baseUrl);
  console.log("getAll");
  console.log(response);
  return response.data;
};

export const putById = async (id, payload) => {
  const response = await axios.put(`${baseUrl}/${id}`, payload);
  console.log("putById");
  console.log(response);
  return response.data;
};

export const deleteById = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`);
  console.log("deleteById");
  console.log(response);
  return response.data;
};
