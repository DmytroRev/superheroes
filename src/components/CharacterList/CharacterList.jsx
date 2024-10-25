import { useEffect, useState } from 'react';
import { getAllCharacters } from '../../api';
import { Link } from 'react-router-dom';

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const data = await getAllCharacters();
                if (Array.isArray(data)) {
                    setCharacters(data);
                } else {
                    console.error('Expected an array of characters');
                }
            } catch (error) {
                console.error('Error fetching characters:', error);
            }
        };
fetchCharacters()        
    }, []);

    return (
        <div>
        {Array.isArray(characters) ? (
            characters.map((character) => (
                <div key={character._id} style={{ cursor: 'pointer' }}>
                    <Link to={`/character/${character._id}`}>
                        <img src={character.avatar} alt={character.nickname} width="100" />
                        <h3>{character.nickname}</h3>
                    </Link>
                </div>
            ))
        ) : (
            <p>No characters found</p>
        )}
    </div>
    );
};

export default CharacterList;
