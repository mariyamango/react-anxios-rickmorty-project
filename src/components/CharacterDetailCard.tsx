import {useParams} from "react-router-dom";
import {Character} from "../types/RickAndMortyCharacter.ts";
import "./CharacterDetailCard.css"

export default function CharacterDetailCard(props: {
                                                characters: Character[]
                                            }
) {

    const {id} = useParams();
    const character = props.characters.filter((character: Character) => character.id === Number(id))[0];
    return (
        <div className="character-detail-card">
            <img src={character.image} alt={character.name}/>
            <div className="character-card-info">
                <h3>{character.name}</h3>
                <p>Species: {character.species}</p>
                <p>Status: {character.status}</p>
                <p>Type: {character.type}</p>
                <p>Gender: {character.gender}</p>
                <p>Origin: {character.origin.name}</p>
                <p>Location: {character.location.name}</p>
                {/*<div>Episodes: {character.episode.map((episode: string) => <div>{episode}</div>)}</div>*/}
            </div>
        </div>
    );
}