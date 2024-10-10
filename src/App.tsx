import './App.css'
import {characters} from "./Characters.ts";
import {Link, Route, Routes} from "react-router-dom";
import WelcomePage from "./WelcomePage.tsx";
import Gallery from "./Gallery.tsx";
import CharacterDetailCard from "./components/CharacterDetailCard.tsx";
import CreatingCharacter from "./CreatingCharacter.tsx";
import {Character} from "./types/RickAndMortyCharacter.ts";


export default function App() {

    const characterList: Character[] = characters;
    let lastId = characterList.map((character: Character) => character.id).reduce(
        (previousValue: number, currentValue: number) => previousValue > currentValue ? previousValue : currentValue
    );

    const addNewCharacter = function (character: Character) {
        character.id = ++lastId;
        character.image = "https://rickandmortyapi.com/api/character/avatar/19.jpeg";
        characterList.push(character);
    }

    return (
        <>
            <h2>
                <Link to={"/"}>Welcome Page</Link> | <Link to={"/characters"}>Gallery</Link> | <Link to={"/create"}>Create
                new character</Link>
            </h2>
            <Routes>
                <Route path="/" element={<WelcomePage/>}/>
                <Route path="/characters" element={<Gallery/>}/>
                <Route path="/characters/:id" element={<CharacterDetailCard characters={characterList}/>}/>
                <Route path="/create" element={<CreatingCharacter callback={addNewCharacter}/>}/>
            </Routes>
        </>
    );
}
