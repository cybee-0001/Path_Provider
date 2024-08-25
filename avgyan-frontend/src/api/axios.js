import axios from "axios";

const BASE_URL = "http://localhost:5000";

const axi = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// Authentication Routes
export const logIn = (authData) => axi.post("/api/user/login", authData);
export const register = (userData) => axi.post("/api/user/sign-in", userData);

export const logOut = () => axiosPrivate.post("/api/user/logout");
export const currentUser = () => axiosPrivate.get("/api/user/current-user");
export const allContents = () => axiosPrivate.get("/api/user/get-contents");
export const createContent = (contentData) =>
  axiosPrivate.post("/api/user/content/create", contentData);

export const saveProgress = (contentId, reqBody) =>
  axiosPrivate.patch(`/api/user/content/save-progress/${contentId}`, reqBody);
export const updateContent = (contentId, reqBody) =>
  axiosPrivate.patch(`/api/user/content/update/${contentId}`, reqBody);
export const deleteContent = (contentId) =>
  axiosPrivate.delete(`/api/user/content/delete/${contentId}`);
