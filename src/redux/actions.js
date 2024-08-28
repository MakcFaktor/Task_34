export const submitBooking = (data) => ({
    type: 'SUBMIT_BOOKING',
    payload: data,
});

export const fetchHotels = () => ({
    type: 'FETCH_HOTELS',
});
