import { useQuery } from '@tanstack/react-query';
import { request, gql } from 'graphql-request';
import { CharacterDetails } from '../components/Character';

export interface EpisodeDetails {
  id: string;
  name: string;
  air_date: string;
  episode: string;
  characters: Array<CharacterDetails>;
}

interface InfoResult {
  info: {
    count: number;
    page: number;
    next: number;
    prev: number;
  };
  results: Array<EpisodeDetails>;
}

interface Episodes {
  episodes: InfoResult;
}

const endpoint = 'https://rickandmortyapi.com/graphql';
const useEpisodes = (name = '', page: number) => {
  return useQuery<InfoResult, Error>(['characters', name, page], async () => {
    const { episodes } = await request<Episodes>(
      endpoint,
      gql`
        query searchEpisodes($page: Int, $name: String) {
          episodes(page: $page, filter: { name: $name }) {
            info {
              count
              pages
              next
              prev
            }
            results {
              id
              name
              air_date
              episode
              characters {
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
    return episodes;
  });
};

export default useEpisodes;
