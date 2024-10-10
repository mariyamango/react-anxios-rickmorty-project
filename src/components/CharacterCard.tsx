import {Character} from "../types/RickAndMortyCharacter.ts";
import "./CharacterCard.css";
import {Link} from "react-router-dom";

type CharacterCardProps = {
    character: Character;
}

export default function CharacterCard(props: Readonly<CharacterCardProps>) {
    return (
        <Link to={"/characters/" + props.character.id}>
            <div className="character-card">
                <img src={props.character.image} alt={props.character.name}/>
                <div className="character-card-info">
                    <h3>{props.character.name}</h3>
                    <p>Species: {props.character.species}</p>
                    <p>Status: {props.character.status}</p>
                </div>
            </div>
        </Link>
    );
}
