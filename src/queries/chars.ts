import { useQuery } from '@tanstack/react-query';
import { request, gql } from 'graphql-request';

const endpoint = 'https://rickandmortyapi.com/graphql';
const useChars = (name = 'rick') => {
  return useQuery(['characters', name], async () => {
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
              species
              type
              gender
              origin {
                id
                name
                type
              }
              location {
                id
                name
                type
              }
            }
          }
        }
      `,
      { name },
    );
    return characters;
  });
};

export default useChars;
