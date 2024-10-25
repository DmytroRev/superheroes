import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCharacterById } from "../../api";

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const data = await getCharacterById(id);
        setCharacter(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchCharacter();
  }, [id]);
  if (error) return <div>Error: {error}</div>;
  if (!character) return <div>Loading...</div>;

  return (
    <div>
      <img src={character.avatar} alt={character.nickname} />
      <h1>{character.nickname}</h1>
      <p>Real name: {character.real_name}</p>
      <p>Origin description: {character.origin_description}</p>
      <p>Superpowers: {character.superpowers}</p>
      <p>Catch phrase: {character.catch_phrase}</p>

      <h3>Images:</h3>
            <div>
                {character.image && character.image.length > 0 ? (
                    character.image.map((imgUrl, index) => (
                        <img key={index} src={imgUrl} alt={`Image ${index + 1}`} width="100" style={{ margin: '5px' }} />
                    ))
                ) : (
                    <p>No images available</p>
                )}
            </div>
    </div>
  );
};

export default CharacterDetails;
