import apiClient from "./apiClient";
import ENDPOINTS from "./endpoints";

export const createComment = async (commentData) => {
    return await apiClient.post(ENDPOINTS.COMMENT.CREATE, commentData)
        .then((response) => response.data);
};

export const likeComment = async (commentId) => {
    return await apiClient.put(ENDPOINTS.COMMENT.LIKE(commentId))
        .then((response) => response.data);
};

export const editComment = async (commentId, commentData) => {
    return await apiClient.put(ENDPOINTS.COMMENT.EDIT(commentId), commentData)
        .then((response) => response.data);
};

export const deleteComment = async (commentId) => {
    return await apiClient.delete(ENDPOINTS.COMMENT.DELETE(commentId))
        .then((response) => response.data);
};

export const getComments = async (params = {}) => {
    return await apiClient.get(ENDPOINTS.COMMENT.GET_ALL, { params })
        .then((response) => response.data);
};

export const getPostComments = async (postId) => {
    return await apiClient.get(ENDPOINTS.COMMENT.GET_BY_POST(postId))
        .then((response) => response.data);
};
