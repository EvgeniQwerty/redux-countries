import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loadCountries = createAsyncThunk(
    '@@counties/load-countries',
    async (_, { extra: { client, api } }) => {
        return client.get(api.ALL_COUNTRIES);
    }
);

const initialState = {
    status: 'idle',
    error: null,
    list: [],
};

const countrySlice = createSlice({
    name: '@@countries',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadCountries.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(loadCountries.rejected, (state, action) => {
                state.status = 'rejected';
                state.error = action.payload || action.meta.error;
            })
            .addCase(loadCountries.fulfilled, (state, action) => {
                state.status = 'recieved';
                state.list = action.payload.data;
            });
    },
});

export const selectCountriesInfo = (state) => ({
    status: state.countries.status,
    error: state.countries.error,
    qty: state.countries.list.length,
});

export const countryReducer = countrySlice.reducer;

//selectors
export const selectAllCountries = (state) => state.countries.list;

export const selectVisibleCountries = (state, { search = '', region = '' }) => {
    return state.countries.list.filter(
        (country) =>
            country.name.toLowerCase().includes(search.toLowerCase()) &&
            (region ? country.region === region : true)
    );
};
