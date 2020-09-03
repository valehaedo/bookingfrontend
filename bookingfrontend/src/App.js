import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Passenger from './Passenger';
import Room from './Room';
import Reservation from './Reservation';
import RoomSearch from './RoomSearch';
import PassengerSearch from './PassengerSearch';
import ReservationSearch from './ReservationSearch';
import {Nav, NavItem, NavLink, Navbar} from 'reactstrap';




export default function App() {
  return (
    <Router>
      <div>
      <Navbar color="dark" dark expand="md">
        <Nav className="mr-auto" navbar>
        <NavItem >
              <NavLink href="/Passenger" >Passenger</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Room">Room</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Reservation">Reservation</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/PassengerSearch">PassengerSearch</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/RoomSearch">RoomSearch</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/ReservationSearch">Passenger</NavLink>
            </NavItem>
            
          
        </Nav>
        </Navbar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Passenger">
            <Passenger />
          </Route>
          <Route path="/Room">
            <Room />
          </Route>
          <Route path="/Reservation">
            <Reservation />
          </Route >
          <Route path="/PassengerSearch">
            <PassengerSearch />
          </Route>
          <Route path="/RoomSearch">
            <RoomSearch />
          </Route>
          <Route path="/ReservationSearch">
            <ReservationSearch />
          </Route>
         
        </Switch>
      </div>
    </Router>
  );
}

