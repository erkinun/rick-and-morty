import { useQuery } from '@tanstack/react-query';

import { request, gql } from 'graphql-request';

import './App.css';

// TODO add eslintrc for unused variables
// TODO search chars
// TODO build a character card
// TODO build a comparison view

// TODO view locations
// TODO view episodes
// TODO relations between chars, locations, episodes

const endpoint = 'https://rickandmortyapi.com/graphql';
const useChars = () => {
  return useQuery(['posts'], async () => {
    const { characters } = await request(
      endpoint,
      gql`
        query search($name: String) {
          characters(filter: { name: $name }) {
            info {
              count
              pages
              next
              prev
            }
            results {
              id
              name
              image
              status
              origin {
                id
              }
            }
          }
        }
      `,
      { name: 'morty' },
    );
    return characters;
  });
};

function App() {
  const { status, data, error, isFetching } = useChars();

  return (
    <div className="App">
      <h1>Rick and Morty</h1>
      <div>
        <h2>Characters</h2>
        <section>
          <label htmlFor="search">
            Search <input name="search" type="text" />
          </label>
        </section>
        <div>
          {status === 'loading' ? (
            'Loading...'
          ) : status === 'error' ? (
            <span>Error: {error.message}</span>
          ) : (
            <>
              {console.log(data)}
              <div>
                {data?.results.map((character) => (
                  <p key={character.id}>
                    <a href="#">{character.name}</a>
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
