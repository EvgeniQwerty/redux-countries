import { useSelector, useDispatch } from 'react-redux';
import { selectCountriesInfo, selectVisibleCountries } from './countries-slice';
import { selectSearch, selectRegion } from '../controls/controls-slice';
import { useEffect } from 'react';
import { loadCountries } from './countries-slice';

export const useCountries = () => {
    const dispatch = useDispatch();

    const search = useSelector(selectSearch);
    const region = useSelector(selectRegion);

    const countries = useSelector((state) =>
        selectVisibleCountries(state, { search, region })
    );

    const { status, error, qty } = useSelector(selectCountriesInfo);

    useEffect(() => {
        if (!qty) {
            console.log('dispatch countries');
            dispatch(loadCountries());
        }
    }, [qty, dispatch]);

    return [countries, status, error];
};
