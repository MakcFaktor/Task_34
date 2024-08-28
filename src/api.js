import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getHotels = async () => {
    try {
        const response = await axios.get(`${API_URL}/hotels`);
        return response.data;
    } catch (error) {
        console.error("Error fetching hotels:", error);
        throw error;
    }
};

export const submitBooking = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/bookings`, data);
        return response.data;
    } catch (error) {
        console.error("Error submitting booking:", error);
        throw error;
    }
};
