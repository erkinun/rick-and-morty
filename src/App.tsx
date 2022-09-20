import { useQuery, QueryClient } from "@tanstack/react-query";

import { request, gql } from "graphql-request";

import "./App.css";

// TODO add eslintrc with single quotes
// TODO build a character card
// TODO build a comparison view
// TODO search chars
// TODO view locations
// TODO view episodes
// TODO relations between chars, locations, episodes

const queryClient = new QueryClient();

const endpoint = "https://rickandmortyapi.com/graphql";
const useChars = () => {
  return useQuery(["posts"], async () => {
    const { characters } = await request(
      endpoint,
      gql`
        {
          characters {
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
      `
    );
    return characters;
  });
};

const query = gql`
  {
    characters {
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
`;

request("https://rickandmortyapi.com/graphql", query).then((data) =>
  console.log(data)
);

function App() {
  const { status, data, error, isFetching } = useChars();

  return (
    <div className="App">
      <h1>Rick and Morty</h1>
      <div>
        <h1>Characters</h1>
        <div>
          {status === "loading" ? (
            "Loading..."
          ) : status === "error" ? (
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
              <div>{isFetching ? "Background Updating..." : " "}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
