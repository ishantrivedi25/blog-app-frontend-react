const ENDPOINTS = {
    AUTH: {
        SIGNIN: "/api/v1/auth/signin",
        SIGNUP: "/api/v1/auth/signup",
        GOOGLE_AUTH: "/api/v1/auth/google",
    },
    USER: {
        UPDATE: (userId) => `/api/v1/user/${userId}`,
        DELETE: (userId) => `/api/v1/user/${userId}`,
        GET_ALL: "/api/v1/user",
        GET_ONE: (userId) => `/api/v1/user/${userId}`,
        SIGNOUT: "/api/v1/user/signout",
    },
    COMMENT: {
        CREATE: "/api/v1/comment",
        LIKE: (commentId) => `/api/v1/comment/${commentId}/like`,
        EDIT: (commentId) => `/api/v1/comment/${commentId}`,
        DELETE: (commentId) => `/api/v1/comment/${commentId}`,
        GET_ALL: "/api/v1/comment",
        GET_BY_POST: (postId) => `/api/v1/comment/post/${postId}`,
    },
    POST: {
        GET_ALL: "/api/v1/post/",
        CREATE: "/api/v1/post",
        UPDATE: (postId) => `/api/v1/post/${postId}`,
        DELETE: (postId) => `/api/v1/post/${postId}`,
    },
};



export default ENDPOINTS;
