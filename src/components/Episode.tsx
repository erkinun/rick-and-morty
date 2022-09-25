import { EpisodeDetails } from '../queries/episodes';

import './Episode.css';

interface EpisodeProps {
  episode: EpisodeDetails;
}

// TODO add a click to show toggle for the characters
const Episode = ({
  episode: { name, air_date, episode, characters = [] },
}: EpisodeProps) => {
  return (
    <section className="Location">
      <h3>{name}</h3>
      <section className="info">
        <section>
          <span>
            {air_date} - {episode}
          </span>
        </section>
        <section className="Location__chars">
          <h4>{characters.length} Characters</h4>
          <div className="Location__residents__flex">
            {characters.map((resident) => (
              <div key={resident.id}>
                <img src={resident.image} />
                <div>{resident.name}</div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </section>
  );
};

export default Episode;
