import { useState } from 'react';

import './App.css';
import Character from './components/Character';
import useChars from './queries/chars';

// TODO add eslintrc for unused variables
// TODO lint-staged
// TODO build a character card
// TODO build a comparison view
// TODO view locations
// TODO view episodes
// TODO relations between chars, locations, episodes
// TODO deploy to production
// TODO add pagination

function App() {
  const [name, setName] = useState('rick');
  const { status, data, error, isFetching } = useChars(name);

  const onSearch = (value: string) => {
    setName(value);
  };

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
              <div>
                {data?.results.map((character) => (
                  <p key={character.id}>
                    <Character character={character} />
                  </p>
                ))}
              </div>
              <div>{isFetching ? 'Background Updating...' : ' '}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
