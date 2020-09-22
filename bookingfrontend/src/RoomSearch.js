import React, { useState } from 'react';
import axios from 'axios';
import {
    Container, Card, CardTitle, CardBody, Button, FormGroup, Input, Label, Table, InputGroup,
    InputGroupText
} from 'reactstrap';

/**
 * Representa la fila de la tabla que muestra los datos de la habitacion.
 */
const RoomRow = (props) => {
    
        const [number, setNumber] = useState('');         
        const handleDeleteRoom = async () => {
            await axios.delete (
                `http://localhost:3001/rooms/${props.number}`  
            )
          
    };
    return (
        <tr>
            <Button className="button btn-outline-warning btn-sm" onClick={handleDeleteRoom}>Delete</Button>            
            <td>{props.number}</td>
            <td>{props.bed}</td>
            <td>{props.extraBed}</td>
            <td>{props.people}</td>
        </tr>
    );
}

const RoomSearch = () => {
    const [number, setNumber] = useState('');
    const [listRooms, setListRooms] = useState([]);

    const handleSearchClicked = async () => {
        const response = await axios.get(
            `http://localhost:3001/rooms/?number=${number}`
        );
        setListRooms(response.data);
    };

    console.log(listRooms)

    return (
        <Container>
            <CardTitle><h2>Search a Room</h2></CardTitle>
            <Card body inverse color="danger">
                <CardBody className="text-center">
                    <div>
                        <label>
                            <CardTitle><h4>Room Number:</h4></CardTitle>
                            <input className="search-bar" type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
                        </label>
                    </div>
                    <div>
                        <Button className="button btn-outline-warning btn-lg" onClick={handleSearchClicked}>Search</Button>
                    </div>
                    <Table>
                        <thead>
                            <tr>
                                <th>Select</th>
                                <th>Room Number </th>
                                <th>Number of Beds</th>
                                <th>Extra Beds</th>
                                <th>Number of people </th>
                            </tr>
                        </thead>
                        <tbody>
                            {listRooms.map((room, i) => <RoomRow key={i} number={room.number} bed={room.bed} extraBed={room.extraBed} people={room.people} />)}
                        </tbody>
                        
                    </Table>
                </CardBody>
            </Card>
        </Container>
    )
}

export default RoomSearch;