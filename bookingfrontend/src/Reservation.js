import React, {useState} from 'react';
import axios from 'axios';

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
        <div>
            <form>
                <label>
                    ID pasenger:
            <input className="search-bar" type="text" value={IdPassenger} onChange={(event) => setIdPasanger(event.target.value)} />
                </label>
                <label>
                    Date:
            <input className="search-bar" type="text" value={date} onChange={(event) => setDate(event.target.value)} />
                </label>
                <label>
                    Room Id:
            <input className="search-bar" type="text" value={roomId} onChange={(event) => setRoomId(event.target.value)} />
                </label>
                <label>
                    State:
                    <input className="search-bar" type="text"value={estado} onChange={(event) => setEstado(event.target.value)} />
                </label>
               
                <button className="submit-button" type="button" onClick={onSaveClicked}>Save</button>
            </form>
        </div>
    )
}

export default Reservation;