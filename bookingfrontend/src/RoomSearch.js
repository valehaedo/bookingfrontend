import React, {useState} from 'react';
import axios from 'axios';

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
        <div>
            
                <label>
                    Room ID:
            <input className="search-bar" type="text" value={roomId} onChange={(e) => setRoomId(e.target.value)}/>
                </label>

                Get All:

            <input type = "checkBox"/>
                
                Delete:
            
                <input type = "checkBox"/>
               
                <button className="submit-button" type="button" onClick={handleSearchClicked}>Search</button>
                <ul>
                {listRooms.map((room) =>
                    <RoomItem  roomId={room._id} number={room.number} people={room.number}/>)}
                    {console.log(listRooms)}

            </ul>
            
            
        </div>
    )
}

export default RoomSearch;