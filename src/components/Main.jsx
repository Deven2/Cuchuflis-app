import React from 'react';
import {useRoutes} from 'hookrouter'
import Routes from '../Routes';
import '../css/Main.css';

function Main () {

    const routeResult = useRoutes(Routes);
  
    return (
      <div id="mainContainer">
          {routeResult}
      </div>
      
    )
  }


export default Main;