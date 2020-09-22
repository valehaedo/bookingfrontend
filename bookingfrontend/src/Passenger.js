import React, { useState } from 'react';
import axios from "axios";
import { Container, Card, CardTitle, CardBody, Button } from 'reactstrap';

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

        <Container>
            <CardTitle><h2>New Passenger</h2></CardTitle>
            <Card body inverse color="success">
                <CardBody className="text-center">



        <div>

            <label>
            <CardTitle><h4> Name:</h4></CardTitle>
                    <input className="search-bar" type="text" value={nombre} onChange={(event) => setNombre(event.target.value)} />
            </label>
        </div>
        <div>

            <label>
            <CardTitle><h4> Apellido:</h4></CardTitle>
                    <input className="search-bar" type="text" value={apellido} onChange={(event) => setApellido(event.target.value)} />
            </label>
        </div>
        <div>

            <label>
            <CardTitle><h4>Pasaporte:</h4></CardTitle>
                    <input className="search-bar" type="text" value={pasaporte} onChange={(e) => setPasaporte(e.target.value)} />
            </label>
        </div>
        <div>
            <Button className="submit-button btn-outline-info btn-lg" type="button" onClick={onSaveClicked}>Save</Button>
        </div>
                </CardBody>
            </Card>
        </Container>
    )
}

export default Passenger;