import {
    SET_DETAILS,
    SET_LOADING,
    SET_ERROR,
    CLEAR_DETAILS,
    SET_NEIGHBORS,
} from './details-actions';

const initialState = {
    status: 'idle', // loading recieved rejected
    error: null,
    currentCountry: null,
    neighbors: [],
};

export const detailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DETAILS: {
            return {
                ...state,
                currentCountry: action.payload,
                status: 'recieved',
            };
        }

        case SET_LOADING: {
            return { ...state, status: 'loading', error: null };
        }

        case SET_ERROR: {
            return { ...state, error: action.payload, status: 'rejected' };
        }

        case CLEAR_DETAILS: {
            return initialState;
        }

        case SET_NEIGHBORS: {
            return { ...state, neighbors: action.payload };
        }

        default: {
            return state;
        }
    }
};
