import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
    clearDetails,
    loadCountryByName,
    selectDetails,
} from './details-slice';

export const useDetails = (name) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadCountryByName(name));
        return () => dispatch(clearDetails());
    }, [dispatch, name]);

    const { currentCountry, error, status } = useSelector(selectDetails);
    console.log({ currentCountry, error, status });

    return [currentCountry, status, error];
};
