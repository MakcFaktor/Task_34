import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';


function* fetchHotelsSaga() {
    try {
        const response = yield call(axios.get, '/hotels');
        yield put({ type: 'SET_HOTELS', hotels: response.data });
    } catch (e) {
        console.error(e);
    }
}


export const submitBooking = (data) => ({ type: 'SUBMIT_BOOKING', payload: data });


function* submitBookingSaga(action) {
    try {
        yield call(axios.post, '/bookings', action.payload);
    } catch (e) {
        console.error(e);
    }
}

export function* rootSaga() {
    yield takeLatest('FETCH_HOTELS', fetchHotelsSaga);
    yield takeLatest('SUBMIT_BOOKING', submitBookingSaga);
}
