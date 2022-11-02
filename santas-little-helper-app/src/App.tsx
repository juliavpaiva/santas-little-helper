import * as React from 'react';
import Button from '@mui/material/Button';
import UserSignIn from './components/sign/sign-in/user_signin';
import GuestChooseUser from './components/sign/sign-in/guest/guest_choose_user';
import SignUp from './components/sign/sign-up/sign_up';
import Home from './components/home/home';
import ListEvents from './components/events/list-events/list_events';
import EventDetails from './components/events/event-details/event_details';

function App() {
  return <EventDetails/>
}

export default App;