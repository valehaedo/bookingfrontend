import React, { useState } from 'react';
import axios from "axios";
import { Container, Card, CardTitle, CardBody, Button, FormGroup, Input, Label } from 'reactstrap';

const ReservationItem = (props) => {

    return <li><div>{props.date + " " + props.roomId + " " + props.estado}</div></li>
}


const ReservationSearch = () => {
    const [dateFrom, setDateFrom] = useState('');
    const [dateTo, setDateTo] = useState('');
    const [roomId, setRoomId] = useState('');
    const [listReservation, setListReservation] = useState([]);


    //ESTO ES OBJETO DE EJEMPLO
    //const reservations = [{dateFrom: "2020-09-10" , dateTo: "2020-09-12", roomId: 3},
    //{dateFrom:"2020-10-10" , dateTo:"2020-10-12", roomId:3 }];

    const handleSearchClicked = async () => {
        const response = await axios.get(
            `http://localhost:3001/reservation/?dateTo=${dateTo}&dateFrom=${dateFrom}&roomId=${roomId}`
        );
        setListReservation(response.data);
    };

    return (
        <Container>
            <Card body inverse color="secondary">
                <CardBody className="text-center">

                    <div>
                        <label>
                            <CardTitle><h4>Date from:</h4></CardTitle>
                            <input className="search-bar" type="text" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} />
                        </label>
                    </div>
                    <div>
                        <label>
                            <CardTitle><h4>Date To:</h4></CardTitle>
                            <input className="search-bar" type="text" value={dateTo} onChange={(e) => setDateTo(e.target.value)} />
                        </label>
                    </div>
                    <div>
                        <label>
                            <CardTitle><h4>Room ID:</h4></CardTitle>
                            <input className="search-bar" type="text" value={roomId} onChange={(e) => setRoomId(e.target.value)} />
                        </label>
                    </div>
                    <div>

                        
                        <FormGroup check>
                            <Input type="checkbox" name="check" id="exampleCheck" />
                            <Label for="exampleCheck" check><h4>Get all the Reservations:</h4></Label>
                        </FormGroup>
                    </div>
                    <div>
                        <Button className="submit-button btn-outline-warning btn-lg" onClick={handleSearchClicked}>Search</Button>
                    </div>
                    <ul>
                        {listReservation.map((reservation) =>
                            <ReservationItem date={reservation.date} roomId={reservation.roomId} estado={reservation.estado} />)}
                        {console.log(listReservation)}

                    </ul>
                </CardBody>
            </Card>
        </Container>
    )
}

export default ReservationSearch;