import React, { useState } from 'react';
import axios from 'axios';
import { Container, Card, CardTitle, CardBody, Button } from 'reactstrap';

const Reservation = (props) => {

    const [IdPassenger, setIdPasanger] = useState();
    const [date, setDate] = useState();
    const [roomId, setRoomId] = useState();
    const [estado, setEstado] = useState();

    const onSaveClicked = async () => {
        try {
            const body = { IdPassenger: IdPassenger, date: date, roomId: roomId, estado: estado };
            //api.post('/reservation/', body);
            const response = await axios.post(`http://localhost:3001/reservation/`, body);
            // Respuesta del servidor esta dentro de .data
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Container>
            <Card body inverse color="warning">
                <CardBody className="text-center">
                    <div className="input-group mb-3">

                        <label>
                           <CardTitle><h4>ID pasenger:</h4></CardTitle>
            <input className="search-bar" type="text" value={IdPassenger} onChange={(event) => setIdPasanger(event.target.value)} />
                        </label>
                    </div>
                    <div className="input-group mb-3">
                        <label>
                        <CardTitle><h4>Date:</h4></CardTitle>
            <input className="search-bar" type="text" value={date} onChange={(event) => setDate(event.target.value)} />
                        </label>
                    </div>
                    <div className="input-group mb-3">
                        <label>
                        <CardTitle><h4>Room Id:</h4></CardTitle>
            <input className="search-bar" type="text" value={roomId} onChange={(event) => setRoomId(event.target.value)} />
                        </label>
                    </div>
                    <div className="input-group mb-3">

                        <label>
                        <CardTitle><h4>State:</h4></CardTitle>
                    <input className="search-bar" type="text" value={estado} onChange={(event) => setEstado(event.target.value)} />
                        </label>
                    </div>
                    <div >
                        <Button  className="submit-button btn-outline-danger btn-lg" onClick={onSaveClicked}>Save</Button>

                    </div>
                </CardBody>
            </Card>
        </Container>
    )
}

export default Reservation;