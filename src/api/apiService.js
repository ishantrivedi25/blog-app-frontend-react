import apiClient from "./apiClient";
import ENDPOINTS from "./endpoints";

/**
 * Generic API request handler
 * @param {string} method - HTTP method (GET, POST, PUT, DELETE)
 * @param {string} url - API endpoint
 * @param {Object} [data] - Request payload (optional)
 * @param {Object} [params] - Query parameters (optional)
 * @returns {Promise} - API response
 */

const apiRequest = async (method, url, data = null, params = null) => {
    try {
        const response = await apiClient({
            method,
            url,
            data,
            params,
        });

        return response.data; // Return only the data
    } catch (error) {
        console.error("API Request Error:", error.response || error.message);
        throw error; // Allow error handling in components
    }
};

export const fetchPosts = async (limit) => {
    return await apiClient.get(ENDPOINTS.POST.GET_ALL(limit));
};


export default { fetchPosts };