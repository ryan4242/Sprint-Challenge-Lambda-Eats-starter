import React, {useState} from "react";
import {Route, Switch} from 'react-router-dom';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import Pizza from './components/pizza/pizza';
import Success from './components/success/Success'

const App = () => {
  const [order, setOrder] = useState({
    name: '',
    size: '',
    pep: false,
    olives: false,
    onion: false,
    jap: false,
    special: ''
  })

  return (
    <div>
      <Nav />
      
      <Switch>
        <Route path='/pizza'>
          <Pizza order={order} setOrder={setOrder} />
        </Route>
        <Route path='/success'>
          <Success order={order} />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
