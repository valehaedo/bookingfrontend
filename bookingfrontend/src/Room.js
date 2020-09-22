import React, { useState } from 'react';
import axios from "axios";
import { Container, Card, CardTitle, CardBody, Button } from 'reactstrap';

const Room = (props) => {

    const [number, setNumber] = useState();
    const [bed, setBed] = useState();
    const [extraBed, setExtraBed] = useState();
    const [people, setPeople] = useState();

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
        <Container>
                    <CardTitle><h2>New Room</h2></CardTitle>
            <Card body inverse color="primary">
                <CardBody className="text-center">
                    <div className="input-group mb-3">
                        <label>
                        <CardTitle><h4>Room Number:</h4></CardTitle>
            <input className="search-bar" type="text" value={number} onChange={(event) => setNumber(event.target.value)} />
                        </label>
                    </div>
                    <div className="input-group mb-3">
                        <label>
                        <CardTitle><h4>Beds:</h4></CardTitle>
            <input className="search-bar" type="text" value={bed} onChange={(event) => setBed(event.target.value)} />
                        </label>
                    </div>
                    <div className="input-group mb-3">
                        <label>
                        <CardTitle><h4>Extra Beds:</h4></CardTitle>
            <input className="search-bar" type="text" value={extraBed} onChange={(event) => setExtraBed(event.target.value)} />
                        </label>
                    </div>
                    <div className="input-group mb-3">
                        <label>
                        <CardTitle><h4>People:</h4></CardTitle>
                    <input className="search-bar" type="text" value={people} onChange={(event) => setPeople(event.target.value)} />
                        </label>
                    </div>
                    <div>
                        <Button className="submit-button btn-outline-warning btn-lg" onClick={onSaveClicked}>Save</Button>
                    </div>

                </CardBody>
            </Card>
        </Container>
    )
}


export default Room;