import { combineReducers } from 'redux';
import { countriesReducer } from './countries/countries-reducer';
import { themeReducer } from './theme/theme-reducer';
import { controlReducer } from './controls/controls-reducer';
import { detailsReducer } from './details/details-reducer';

export const rootReducer = combineReducers({
    countries: countriesReducer,
    theme: themeReducer,
    controls: controlReducer,
    details: detailsReducer,
});
