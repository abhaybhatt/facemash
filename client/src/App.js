import React from 'react';
import Navbar from './components/navbar.js'
import Desc from './components/description.js'
import Hot from './components/hotter.js'
import Cards from './components/cards/cards.js'
import Form from './components/Form/Form.js'
import Leaderboard from './components/Leaderboard.js'
import {useDispatch} from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { fetchProfile } from './actions/profiles.js'

const App = () =>{
  const dispatch = useDispatch();

  React.useEffect(()=>{
    dispatch(fetchProfile())
  },[]);
  return (
    <BrowserRouter>
      <Navbar/>

      <Switch>

      <Route path="/form" exact>
          <Form/>
      </Route>

      <Route path="/leaderboard" exact>
          <Leaderboard/>
      </Route>

        <Route path="/" exact>
          <Desc/>
          <Hot/>
          <Cards/>
        </Route>

      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
