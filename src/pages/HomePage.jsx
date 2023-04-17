import { useNavigate } from 'react-router-dom';

import { List } from '../components/List';
import { Card } from '../components/Card';
import { Controls } from '../components/Controls';

import {
    selectCountriesInfo,
    selectVisibleCountries,
} from '../store/countries/countries-selectors';
import {
    selectSearch,
    selectRegion,
} from '../store/controls/controls-selectors';
import { fetchCountries } from '../store/countries/countries-actions';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

export const HomePage = () => {
    const navigate = useNavigate();

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
            dispatch(fetchCountries());
        }
    }, [qty, dispatch]);

    return (
        <>
            <Controls />

            {status === 'rejected' && (
                <h2>Failed to fetch data. Error: {error}</h2>
            )}
            {status === 'loading' && <h2>Loading...</h2>}

            {status === 'recieved' && (
                <List>
                    {countries.map((c) => {
                        const countryInfo = {
                            img: c.flags.png,
                            name: c.name,
                            info: [
                                {
                                    title: 'Population',
                                    description: c.population.toLocaleString(),
                                },
                                {
                                    title: 'Region',
                                    description: c.region,
                                },
                                {
                                    title: 'Capital',
                                    description: c.capital,
                                },
                            ],
                        };

                        return (
                            <Card
                                key={c.name}
                                onClick={() => navigate(`/country/${c.name}`)}
                                {...countryInfo}
                            />
                        );
                    })}
                </List>
            )}
        </>
    );
};
