import apiClient from "./apiClient";
import ENDPOINTS from "./endpoints";

export const createPost = async (postData) => {
    return await apiClient.post(ENDPOINTS.POST.CREATE, postData).then((response) => response.data);
};

export const getPosts = async (params = {}) => {
    return await apiClient.get(ENDPOINTS.POST.GET_ALL, { params }).then((response) => response.data);
};

export const updatePost = async (postId, postData) => {
    return await apiClient.put(ENDPOINTS.POST.UPDATE(postId), postData).then((response) => response.data);
};

export const deletePost = async (postId) => {
    return await apiClient.delete(ENDPOINTS.POST.DELETE(postId)).then((response) => response.data);
};