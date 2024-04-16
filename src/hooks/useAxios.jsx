import { useEffect } from 'react';
import axios from 'axios';

const axiosSecure = axios.create({
    // baseURL: 'http://localhost:5000/',
    baseURL: 'https://legalmate-server.vercel.app/',
});

const useAxiosSecure = () => {

    // useEffect(() => {
    //     axiosSecure.interceptors.request.use((config) => {
    //         const token = localStorage.getItem('access-token');
    //         if (token) {
    //             config.headers.Authorization = `Bearer ${token}`;
    //         }
    //         return config;
    //     });
    // }, []);
    return [axiosSecure];
};

export default useAxiosSecure;