import apiClient from "./apiClient";
import ENDPOINTS from "./endpoints";

export const signin = async (credentials) => {
    return await apiClient.post(ENDPOINTS.AUTH.SIGNIN, credentials).then((response) => response.data);
};

export const signup = async (userData) => {
    return await apiClient.post(ENDPOINTS.AUTH.SIGNUP, userData).then((response) => response.data);
};

export const googleAuth = async (authData) => {
    return await apiClient.post(ENDPOINTS.AUTH.GOOGLE_AUTH, authData).then((response) => response.data);
};