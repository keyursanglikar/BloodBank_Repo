import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Change this to your server URL

export const donateBlood = async (donationData) => {
    try {
        const response = await axios.post(`${API_URL}/donate`, donationData);
        return response.data;
    } catch (error) {
        console.error("Error donating blood", error);
        throw error;
    }
};
