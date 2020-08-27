import React, { useState } from 'react';
import axios from "axios";

const Room = (props) => {

    const [number, setNumber] = useState();
    const [bed, setBed] = useState();
    const [extraBed, setExtraBed] = useState();
    const [people, setPeople]= useState();

    const onSaveClicked = async () => {
        try {
            const body = { number: number, bed: bed, extraBed: extraBed, people: people };
            //api.post('/rooms/', body);
            const response = await axios.post(`http://localhost:3001/rooms/`, body);
            // Respuesta del servidor esta dentro de .data
            console.log(response.data);
        } catch (error) {
            console.error(error);   
        }
    }
    return (
        <div>
            <form>
                <label>
                    Room Number:
            <input className="search-bar" type="text" value={number} onChange={(event)=> setNumber(event.target.value)}/>
                </label>
                <label>
                    Beds:
            <input className="search-bar" type="text" value={bed} onChange={(event)=> setBed(event.target.value)}/>
                </label>
                <label>
                    Extra Beds:
            <input className="search-bar" type="text" value={extraBed} onChange={(event)=> setExtraBed(event.target.value)}/>
                </label>
                <label>
                    People:
                    <input className="search-bar" type="text" value={people} onChange={(event)=> setPeople(event.target.value)}/>
                </label>
               
                <button className="submit-button" type="button" onClick={onSaveClicked}>Save</button>

            </form>
        </div>
    )
}


export default Room;