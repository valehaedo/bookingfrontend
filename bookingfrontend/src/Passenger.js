import React, { useState } from 'react';
import axios from "axios";

const Passenger = (props) => {

    const [apellido, setApellido] = useState();
    const [nombre, setNombre] = useState();
    const [pasaporte, setPasaporte] = useState();

    const onSaveClicked = async () => {
        try {
            const body = { nombre: nombre, apellido: apellido, pasaporte: pasaporte };
            //api.post('/pasajeros/', body);
            const response = await axios.post(`http://localhost:3001/pasajeros/`, body);
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
                    Name:
                    <input className="search-bar" type="text" value={nombre} onChange={(event) => setNombre(event.target.value)} />
                </label>
                <label>
                    Apellido:
                    <input className="search-bar" type="text" value={apellido} onChange={(event) => setApellido(event.target.value)} />
                </label>
                <label>
                    Pasaporte:
                    <input className="search-bar" type="text" value={pasaporte} onChange={(e) => setPasaporte(e.target.value)} />
                </label>

                <button className="submit-button" type="button" onClick={onSaveClicked}>Save</button>

            </form>
        </div>
    )
}

export default Passenger;