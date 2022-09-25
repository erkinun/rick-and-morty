import { useEffect, useState } from 'react';
import Location from '../components/Location';
import NavBar from '../components/NavBar';
import useLocations from '../queries/locations';

// TODO looks like these could be shared between pages?
const Locations = () => {
  const [name, setName] = useState('earth');
  const [page, setPage] = useState(1);
  const { status, data, error, isFetching } = useLocations(name, page);

  const onSearch = (value: string) => {
    setName(value);
  };

  useEffect(() => {
    setPage(1);
  }, [name]);
  return (
    <div className="App">
      <h1>Rick and Morty</h1>
      <div>
        <h2>Locations</h2>
        <section>
          <label htmlFor="search">
            Search{' '}
            <input
              defaultValue={name}
              onBlur={(e) => onSearch(e.target.value)}
              name="search"
              type="text"
            />
          </label>
        </section>
        <div>
          {status === 'loading' ? (
            'Loading...'
          ) : status === 'error' ? (
            <span>Error: {error.message}</span>
          ) : (
            <>
              <ul>
                {data?.results.map((location) => (
                  <li key={location.id}>
                    <Location location={location} />
                  </li>
                ))}
              </ul>
              {data?.info?.next && (
                <button onClick={() => setPage(data.info.next)}>Next</button>
              )}
              <div>{isFetching ? 'Background Updating...' : ' '}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default () => {
  return (
    <div>
      <NavBar />
      <Locations />
    </div>
  );
};
