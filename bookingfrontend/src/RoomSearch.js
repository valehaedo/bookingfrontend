import React, { useState } from 'react';
import axios from 'axios';
import { Container, Card, CardTitle, CardBody, Button, FormGroup, Input, Label } from 'reactstrap';


const RoomItem = (props) => {

    return <li><div>{props.roomId + " " + props.number + " " + props.people}</div></li>
}

const RoomSearch = () => {
    const [roomId, setRoomId] = useState('');
    const [listRooms, setListRooms] = useState([]);
    //const rooms = [{number: 1, bed: 1, extraBed: 1, people: 1},
    //{number:2, bed: 3, extraBed: 1, people: 4}];
    //const listRooms = rooms.map((room) =>
    //<li>{room.number + " " + room.bed + " " + room.extraBed+" "+ room.people}</li>
    //);

    const handleSearchClicked = async () => {
        const response = await axios.get(
            `http://localhost:3001/rooms/?roomId=${roomId}`
        );
        setListRooms(response.data);
    };

    return (
        <Container>
            <Card body inverse color="danger">
                <CardBody className="text-center">
                    <div>
                        <label>
                            <CardTitle><h4>Room ID:</h4></CardTitle>
                            <input className="search-bar" type="text" value={roomId} onChange={(e) => setRoomId(e.target.value)} />
                        </label>
                    </div>
                    <div>
                        <FormGroup check>
                            <Input type="checkbox" name="check" id="exampleCheck" />
                            <Label for="exampleCheck" check><h4>Get All:</h4></Label>
                        </FormGroup>
                    </div>
                    <div>
                        <FormGroup check>
                            <Input type="checkbox" name="check" id="exampleCheck" />
                            <Label for="exampleCheck" check><h4>Delete:</h4></Label>
                        </FormGroup>
                    </div>
                    <div>
                        <Button className="submit-button btn-outline-warning btn-lg" onClick={handleSearchClicked}>Search</Button>
                    </div>
                    <ul>
                        {listRooms.map((room) =>
                            <RoomItem roomId={room._id} number={room.number} people={room.number} />)}
                        {console.log(listRooms)}

                    </ul>


                </CardBody>
            </Card>
        </Container>
    )
}

export default RoomSearch;