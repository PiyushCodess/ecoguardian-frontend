import axios from 'axios';


const API_URL = '/api/complaints';

export const submitComplaint = async (data) => {
    const response = await axios.post(API_URL, data);
    return response.data;
};

export const getComplaints = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};
