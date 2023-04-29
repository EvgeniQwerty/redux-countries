import { Info } from './Info';
import { useDetails } from './use-details';

const CountryDetails = ({ name, navigate }) => {
    const [currentCountry, status, error] = useDetails(name);

    return (
        <>
            {status === 'loading' && <h2>Loading...</h2>}
            {status === 'rejected' && (
                <h2>Failed to fetch data. Error: {error}</h2>
            )}
            {status === 'recieved' && currentCountry && (
                <Info push={navigate} {...currentCountry} />
            )}
        </>
    );
};

export { CountryDetails };
