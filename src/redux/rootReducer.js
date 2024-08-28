import { combineReducers } from 'redux';

const hotelsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_HOTELS':
            return action.hotels;
        default:
            return state;
    }
};

export default combineReducers({
    hotels: hotelsReducer,
});
