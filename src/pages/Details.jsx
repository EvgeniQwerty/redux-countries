import { useNavigate, useParams } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

import { Button } from '../components/Button';
import { Info } from '../components/Info';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { clearDetails, fetchCountry } from '../store/details/details-actions';
import { selectDetails } from '../store/details/details-selectors';

export const Details = () => {
    const { name } = useParams();
    const navigate = useNavigate();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCountry(name));

        return () => dispatch(clearDetails());
    }, [dispatch, name]);

    const { currentCountry, error, status } = useSelector(selectDetails);

    return (
        <div>
            <Button onClick={() => navigate(-1)}>
                <IoArrowBack /> Back
            </Button>
            {status === 'loading' && <h2>Loading...</h2>}
            {status === 'rejected' && (
                <h2>Failed to fetch data. Error: {error}</h2>
            )}
            {status === 'recieved' && currentCountry && (
                <Info push={navigate} {...currentCountry} />
            )}
        </div>
    );
};
