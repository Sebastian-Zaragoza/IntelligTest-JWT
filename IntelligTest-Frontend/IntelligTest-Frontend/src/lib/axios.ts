import axios from 'axios';

// src/lib/axios.ts
console.log('API baseURL is:', import.meta.env.VITE_API_URL)
const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})
export default api
