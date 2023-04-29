import { List } from '../../components/List';
import { Card } from '../../components/Card';
import { useCountries } from './use-countries';
import { useNavigate } from 'react-router-dom';

export const CountryList = () => {
    
    const navigate = useNavigate();
    
    const [countries, status, error] = useCountries();

    return (
        <>
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
