import axios from "axios";

const API_BASE_URL = "https://remarcable-back-app.onrender.com/api";

export const fetchProducts = async (filters = {}) => {
    try { 

        const params = new URLSearchParams();

        if (filters.category && filters.category.length > 0) {
            filters.category.forEach(cat => params.append('category', cat));  
        }

        if (filters.tags && filters.tags.length > 0) {
            filters.tags.forEach(tag => params.append('tags', tag));
        }

        if (filters.q) {
            params.append('q', filters.q);
        }


        const response = await axios.get(`${API_BASE_URL}/products/?${params.toString()}`);
        console.log("API Response:", response.data); 
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        return [];
    }
};

export const fetchCategories = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/categories/`);
        return response.data;
    } catch (error) {
        console.error("Error fetching categories:", error);
        return [];
    }
};

export const fetchTags = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/tags/`);
        return response.data;
    } catch (error) {
        console.error("Error fetching tags:", error);
        return [];
    }
};

