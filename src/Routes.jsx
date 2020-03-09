import React from 'react';
import Home from './components/currents/Home';
import Games from './components/currents/Games';
import Chat from './components/currents/Chat';

const routes = {
    "/": () => <Home />,
    "/games": () => <Games />,
    "/chat": () => <Chat />
};

export default routes;