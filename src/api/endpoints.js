const API_BASE_URL = process.env.REACT_APP_API_BASE_URL; // Load from .env file

const ENDPOINTS = {
    USER: {
        SIGNOUT: "/api/user/signout",
        GET_USER: (userId) => `/api/user/${userId}`,
    },
    AUTH: {
        GOOGLE_AUTH: "/api/auth/google",
    },
    COMMENT: {
        CREATE: "/api/comment/create",
        EDIT: (commentId) => `/api/comment/editComment/${commentId}`,
        GET_POST_COMMENTS: (postId) => `/api/comment/getPostComments/${postId}`,
    },
    POST: {
        GET_ALL: (limit = 5) => `/api/post/getposts?limit=${limit}`,
        GET_BY_ID: (postId) => `/api/post/getposts?postId=${postId}`,
    },
};



export default ENDPOINTS;
