import axios from "axios";

// @ts-ignore
const API_URL = import.meta.env.VITE_APP_API_URL || "http://localhost:3000";

const axiosInstance = axios.create({
  baseURL: API_URL,
});

export async function getTasks() {
  const { data } = await axiosInstance.get("tasks");

  return data;
}

export async function getTask(id) {
  const { data } = await axiosInstance.get(`tasks/${id}`);

  return data;
}
