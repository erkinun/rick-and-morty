interface Location {
  id: string;
  name: string;
  type: string;
}

interface CharacterDetails {
  id: string;
  name: string;
  image: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
}

interface CharacterProps {
  character: CharacterDetails;
}

// TODO click out to character page?
const Character = ({
  character: {
    name,
    image,
    status,
    species,
    gender,
    type,
    origin: { name: originName },
    location: { name: locatioName },
  },
}: CharacterProps) => {
  return (
    <section>
      <h3>{name}</h3>
      <img src={image} />
      <section className="info">
        <section>
          <span>
            {species} {type ? `- ${type}` : ''} - {gender}
          </span>
        </section>
        <section>
          <span>Status: {status}</span>
        </section>
        <section>
          <span>From: {originName}</span>
        </section>
        <section>
          <span>Last seen: {locatioName}</span>
        </section>
      </section>
    </section>
  );
};

export default Character;
