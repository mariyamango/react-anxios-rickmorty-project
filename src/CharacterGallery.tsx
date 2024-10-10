import {useEffect, useState} from "react";
import CharacterGallery from "./components/CharacterGallery.tsx";
import {Character} from "./types/RickAndMortyCharacter.ts";

function Gallery(
) {
    const [characters, setcharacters] = useState<Character[]>([]);
    const [searchText, setSearchText] = useState("");
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
            .then(response => response.json())
            .then(data => {
                setcharacters(data.results)
                setTotalPages(data.info.pages)
            })
            .catch((error) => console.log("Some error occurred",error));
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