import { useQuery } from '@tanstack/react-query';
import { request, gql } from 'graphql-request';
import { CharacterDetails } from '../components/Character';

export interface LocationDetails {
  id: string;
  name: string;
  type: string;
  dimension: string;
  residents: Array<CharacterDetails>;
}

interface InfoResult {
  info: {
    count: number;
    page: number;
    next: number;
    prev: number;
  };
  results: Array<LocationDetails>;
}

interface Locations {
  locations: InfoResult;
}

const endpoint = 'https://rickandmortyapi.com/graphql';
const useLocations = (name = 'earth', page: number) => {
  return useQuery<InfoResult, Error>(['characters', name, page], async () => {
    const { locations } = await request<Locations>(
      endpoint,
      gql`
        query searchLocations($page: Int, $name: String) {
          locations(page: $page, filter: { name: $name }) {
            info {
              count
              pages
              next
              prev
            }
            results {
              id
              name
              type
              dimension
              residents {
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
        }
      `,
      { name, page },
    );
    return locations;
  });
};

export default useLocations;
