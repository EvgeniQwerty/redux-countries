export const SET_COUNTRIES = '@@countries/SET_COUNTRIES';
export const SET_LOADING = '@@countries/SET_LOADING';
export const SET_ERROR = '@@countries/SET_ERROR';

export const setCountries = (countries) => ({
    type: SET_COUNTRIES,
    payload: countries,
});

export const setLoading = () => ({
    type: SET_LOADING,
});

export const setError = (error) => ({
    type: SET_ERROR,
    payload: error,
});

export const fetchCountries =
    () =>
    (dispatch, _, { client, api }) => {
        dispatch(setLoading());
        client
            .get(api.ALL_COUNTRIES)
            .then((data) => {
                dispatch(setCountries(data.data));
            })
            .catch((err) => dispatch(setError(err.message)));
    };