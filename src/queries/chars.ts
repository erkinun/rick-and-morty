import { useQuery } from '@tanstack/react-query';
import { request, gql } from 'graphql-request';

const endpoint = 'https://rickandmortyapi.com/graphql';
const useChars = (name = 'rick', page: number) => {
  return useQuery(['characters', name, page], async () => {
    const { characters } = await request(
      endpoint,
      gql`
        query search($page: Int, $name: String) {
          characters(page: $page, filter: { name: $name }) {
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
      { name, page },
    );
    return characters;
  });
};

export default useChars;
