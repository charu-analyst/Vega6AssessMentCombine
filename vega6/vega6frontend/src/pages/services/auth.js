import api from "./api";
import { API_BASE_URL } from "../utils/constants";

export const registerUser = async (userData) => {
  try {
    const response = await api.post("/user/SignUp", userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await api.post("/user/userLogin", credentials);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getUserProfile = async () => {
  try {
    const response = await api.get("/user/getUserProfile");
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateUserProfile = async (userData) => {
  try {
    const response = await api.put("/user/editUserProfile", userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const deleteUserProfile = async () => {
  try {
    const response = await api.put("/user/deleteUserProfile");
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
