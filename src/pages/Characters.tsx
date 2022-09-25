import { useEffect, useState } from 'react';
import Character from '../components/Character';
import useChars from '../queries/chars';

const Characters = () => {
  const [name, setName] = useState('rick');
  const [page, setPage] = useState(1);
  const { status, data, error, isFetching } = useChars(name, page);

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
        <h2>Characters</h2>
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
                {data?.results.map((character) => (
                  <li key={character.id}>
                    <Character character={character} />
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

export default Characters;
