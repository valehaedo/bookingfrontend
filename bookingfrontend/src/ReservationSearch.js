import React, { useState } from 'react';
import axios from "axios";

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
        <div>
            <label>
                Date from:
            <input className="search-bar" type="text" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} />
            </label>
            <label>
                Date To:
            <input className="search-bar" type="text" value={dateTo} onChange={(e) => setDateTo(e.target.value)} />
            </label>
            <label>
                Room ID:
            <input className="search-bar" type="text" value={roomId} onChange={(e) => setRoomId(e.target.value)} />
            </label>
                Get all the Reservations:
            <input type="checkBox" />

            <button className="submit-button" type="button" onClick={handleSearchClicked}>Search</button>
            <ul>
                {listReservation.map((reservation) =>
                    <ReservationItem date={reservation.date} roomId={reservation.roomId} estado={reservation.estado}/>)}
                    {console.log(listReservation)}

            </ul>
        </div>
    )
}

export default ReservationSearch;