import apiClient from "./apiClient";
import ENDPOINTS from "./endpoints";

export const updateUser = async (userId, userData) => {
    return await apiClient.put(ENDPOINTS.USER.UPDATE(userId), userData)
        .then((response) => response.data);
};

export const deleteUser = async (userId) => {
    return await apiClient.delete(ENDPOINTS.USER.DELETE(userId))
        .then((response) => response.data);
};

export const getUsers = async (params = {}) => {
    return await apiClient.get(ENDPOINTS.USER.GET_ALL, { params })
        .then((response) => response.data);
};

export const getUser = async (userId) => {
    return await apiClient.get(ENDPOINTS.USER.GET_ONE(userId))
        .then((response) => response.data);
};

export const signout = async () => {
    return await apiClient.post(ENDPOINTS.USER.SIGNOUT)
        .then((response) => response.data);
};
