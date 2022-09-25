import { useEffect, useState } from 'react';
import Episode from '../components/Episode';
import Location from '../components/Location';
import NavBar from '../components/NavBar';
import useEpisodes from '../queries/episodes';

// TODO looks like these could be shared between pages?
const Episodes = () => {
  const [name, setName] = useState('');
  const [page, setPage] = useState(1);
  const { status, data, error, isFetching } = useEpisodes(name, page);

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
        <h2>Episodes</h2>
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
                {data?.results.map((episode) => (
                  <li key={episode.id}>
                    <Episode episode={episode} />
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
      <Episodes />
    </div>
  );
};
