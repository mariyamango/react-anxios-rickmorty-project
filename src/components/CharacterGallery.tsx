import {Character} from "../types/RickAndMortyCharacter.ts";
import CharacterCard from "./CharacterCard.tsx";
import "./CharacterGallery.css";

type CharacterGalleryProps = {
    characters: Character[];
}
export default function CharacterGallery(props: Readonly<CharacterGalleryProps>) {
    const cards = props.characters.map((character) => <CharacterCard key={character.id} character={character}/>);
    return (
        <div className="character-gallery">
            {cards}
        </div>
    );
}
