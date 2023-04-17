import { SET_SEARCH, SET_REGION, CLEAR_CONTROLS } from './controls-actions';

const initialState = {
    search: '',
    region: '',
};

export const controlReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH: {
            return { ...state, search: action.payload };
        }

        case SET_REGION: {
            return { ...state, region: action.payload };
        }

        case CLEAR_CONTROLS: {
            return initialState;
        }

        default: {
            return state;
        }
    }
};
