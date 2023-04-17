import { SET_COUNTRIES, SET_LOADING, SET_ERROR } from './countries-actions';

const initialState = {
    status: 'idle', // loading recieved rejected
    error: null,
    list: [],
};

export const countriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COUNTRIES: {
            return { ...state, list: action.payload, status: 'recieved' };
        }

        case SET_LOADING: {
            return { ...state, status: 'loading', error: null };
        }

        case SET_ERROR: {
            return { ...state, error: action.payload, status: 'rejected' };
        }

        default: {
            return state;
        }
    }
};
