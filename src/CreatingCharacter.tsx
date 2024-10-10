import {ChangeEvent, FormEvent, useState} from "react";
import {Character} from "./types/RickAndMortyCharacter.ts";

function CreatingCharacter(props: {
                               callback: (value: Character) => void
                           }
) {

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const [valueCharacter, setValueCharacter] = useState<Character>({});

    const [characterCreated, setCharacterCreated]  = useState(false);

    function setSimpleValue(event: ChangeEvent<HTMLInputElement>) {
        setValueCharacter({
            ...valueCharacter,
            [event.target.name]: event.target.value
        })
    }

    function setOrigin(event: ChangeEvent<HTMLInputElement>) {
        const origin = valueCharacter?.origin ?? {};
        origin.name = event.target.value;

        setValueCharacter({
            ...valueCharacter,
            ["origin"]: origin
        })
    }

    function setLocation(event: ChangeEvent<HTMLInputElement>) {
        const location = valueCharacter?.location ?? {};
        location.name = event.target.value;

        setValueCharacter({
            ...valueCharacter,
            ["location"]: location
        })
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        props.callback(valueCharacter);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        setValueCharacter({});
        setCharacterCreated(true);
        setTimeout(
            () => setCharacterCreated(false),
            1000
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" name="name" required value={valueCharacter?.name ?? ""}
                   onChange={event => setSimpleValue(event)}/>
            <label>Species:</label>
            <input type="text" name="species" required value={valueCharacter?.species ?? ""}
                   onChange={event => setSimpleValue(event)}/>
            <label>Status:</label>
            <input type="text" name="status" required value={valueCharacter?.status ?? ""}
                   onChange={event => setSimpleValue(event)}/>
            <label>Type:</label>
            <input type="text" name="type" required value={valueCharacter?.type ?? ""}
                   onChange={event => setSimpleValue(event)}/>
            <label>Gender</label>
            <input type="text" name="gender" required value={valueCharacter?.gender ?? ""}
                   onChange={event => setSimpleValue(event)}/>
            <label>Origin:</label>
            <input type="text" name="origin" required value={valueCharacter?.origin?.name ?? ""}
                   onChange={event => setOrigin(event)}/>
            <label>Location:</label>
            <input type="text" name="location" required value={valueCharacter?.location?.name ?? ""}
                   onChange={event => setLocation(event)}/>
            <label>URL:</label>
            <input type="text" name="url" required value={valueCharacter?.url ?? ""}
                   onChange={event => setSimpleValue(event)}/>

            <button type="submit">Submit</button>
            {characterCreated && <p>Character created!</p>}
        </form>
    )
}

export default CreatingCharacter;