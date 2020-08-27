import React, { useState } from 'react';
import axios from "axios";

const PassengerItem = (props) => {
    return <li><div>{props.nombre + " " + props.apellido + " " + props.pasaporte + " " + props.passengerId}</div></li>
}

const PasengerSearch = () => {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [pasaporte, setPasaporte] = useState('');
    const [passengerId, setPassengerId] = useState('');
    const [limit, setLimit] = useState('');
    const [listPassengers, setListPassengers] = useState([]);

    // ESTO ES OBJETO DE EJEMPLo
    // const pasengers = [{nombre: "Juan Manuel", apellido: "Haedo", pasaporte: 1234568, pasaId: 2345},
    //  {nombre:"Maria Valeria", apellido:"Haedo", pasaporte: 1976348, pasaId: 2349 }];





    const handleSearchClicked = async () => {
        const response = await axios.get(
            `http://localhost:3001/pasajeros/?nombre=${nombre}&apellido=${apellido}&pasaporte=${pasaporte}&passengerId=${passengerId}`
        );
        setListPassengers(response.data);
    }

    return (
        <div>
            <label>
                Id of pasenger:
                    <input className="search-bar" type="text" value={passengerId} onChange={(e) => setPassengerId(e.target.value)} />
            </label>
            <label>
                Nombre:
                    <input className="search-bar" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            </label>
            <label>
                Apellido:
                    <input className="search-bar" type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
            </label>
            <label>
                Pasaporte:
                    <input className="search-bar" type="text" value={pasaporte} onChange={(e) => setPasaporte(e.target.value)} />
            </label>
            <label>
                Limit:
                    <input className="search-bar" type="text" value={limit} onChange={(e) => setLimit(e.target.value)} />
            </label>
            <button className="search-button" type="button" onClick={handleSearchClicked}>Search</button>
            <ul>
                {listPassengers.map((passenger) =>
                    <PassengerItem nombre={passenger.nombre} apellido={passenger.apellido} pasaporte={passenger.pasaporte} passengerId={passenger._id} />)}
                
            </ul>
            
        </div>
    )
}





export default PasengerSearch;