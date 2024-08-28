import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getHotels = () => axios.get(`${API_URL}/hotels`);
export const submitBooking = (data) => axios.post(`${API_URL}/bookings`, data);
