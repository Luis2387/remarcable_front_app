import axios from "axios";

const API_BASE_URL = "https://remarcable-back-app.onrender.com/api";

export const fetchProducts = async (filters = {}) => {
    try { 

        // Create an instance of URLSearchParams to build query parameters
        const params = new URLSearchParams();

        // If categories or tags are selected, add them to the query parameters

        if (filters.category && filters.category.length > 0) {
            filters.category.forEach(cat => params.append('category', cat));  
        }

        if (filters.tags && filters.tags.length > 0) {
            filters.tags.forEach(tag => params.append('tags', tag));
        }

        // If a search query is provided, add it to the query parameters

        if (filters.q) {
            params.append('q', filters.q);
        }

        // Send a GET request to fetch products, including the constructed query parameters

        const response = await axios.get(`${API_BASE_URL}/products/?${params.toString()}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};

// Function to fetch categories from the API

export const fetchCategories = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/categories/`);
        return response.data;
    } catch (error) {
        console.error("Error fetching categories:", error);
        return [];
    }
};

// Function to fetch tags from the API

export const fetchTags = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/tags/`);
        return response.data;
    } catch (error) {
        console.error("Error fetching tags:", error);
        return [];
    }
};

