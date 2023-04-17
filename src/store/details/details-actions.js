export const SET_DETAILS = '@@details/SET_DETAILS';
export const SET_LOADING = '@@details/SET_LOADING';
export const SET_ERROR = '@@details/SET_ERROR';
export const CLEAR_DETAILS = '@@details/CLEAR_DETAILS';
export const SET_NEIGHBORS = '@@details/SET_NEIGHBORS';

export const setDetails = (details) => ({
    type: SET_DETAILS,
    payload: details,
});

export const setLoading = () => ({
    type: SET_LOADING,
});

export const setError = (error) => ({
    type: SET_ERROR,
    payload: error,
});

export const clearDetails = () => ({
    type: CLEAR_DETAILS,
});

export const setNeighbords = (countries) => ({
    type: SET_NEIGHBORS,
    payload: countries,
});

export const fetchCountry =
    (name) =>
    (dispatch, _, { client, api }) => {
        dispatch(setLoading());
        client
            .get(api.searchByCountry(name))
            .then((data) => {
                dispatch(setDetails(data.data[0]));
            })
            .catch((err) => dispatch(setError(err.message)));
    };

export const fetchNeighbords =
    (codes) =>
    (dispatch, _, { client, api }) => {
        client.get(api.filterByCode(codes)).then((data) => {
            dispatch(setNeighbords(data.data.map((c) => c.name))).catch(
                console.error
            );
        });
    };
