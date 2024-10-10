import {useEffect, useState} from "react";
import CharacterGallery from "./components/CharacterGallery.tsx";
import {Character,CharacterResponse} from "./types/RickAndMortyCharacter.ts";
import axios from "axios";

function Gallery(
) {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [searchText, setSearchText] = useState("");
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await axios.get<CharacterResponse>(`https://rickandmortyapi.com/api/character/?page=${page}`)
                setCharacters(response.data.results);
                setTotalPages(response.data.info.pages)
            } catch (error) {
                console.log("Some error occurred: ",error)
            }
        }
        fetchCharacters();
        }, [page])

    const filteredCharacters = characters.filter(
        (character) => character.name.toLowerCase().includes(searchText.toLowerCase())
    );

    const handlePreviousPage = () => {
        if (page > 1) {
            setPage(previousPage => previousPage - 1);
        }
    }

    const handleNextPage =() => {
        if (page < totalPages) {
            setPage(previousPage => previousPage + 1);
        }
    }

    return <>
        <input
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search for a character"/>
        {
            filteredCharacters.length > 0
                ? <CharacterGallery characters={filteredCharacters}/>
                : <p>No characters found</p>
        }
        <div>
            <button onClick = {handlePreviousPage} disabled={page === 1}>Previous page</button>
            <button onClick = {handleNextPage} disabled={page === totalPages}>Next page</button>
        </div>
    </>
}

export default Gallery;