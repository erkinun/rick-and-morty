import { LocationDetails } from '../queries/locations';

import './Location.css';

interface LocationProps {
  location: LocationDetails;
}

const Location = ({
  location: { name, type, dimension, residents },
}: LocationProps) => {
  return (
    <section className="Location">
      <h3>{name}</h3>
      <section className="info">
        <section>
          <span>
            {dimension} {type ? `- ${type}` : ''}
          </span>
        </section>
        <section className="Location__residents">
          {
            // TODO make the residents bit nicer, show images
          }
          <h4>{residents.length} Residents</h4>
          <div className="Location__residents__flex">
            {residents.map((resident) => (
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

export default Location;
