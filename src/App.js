import React, {useState} from "react";
import {Route, Switch} from 'react-router-dom';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import Pizza from './components/pizza/pizza';
import Success from './components/success/Success'

const App = () => {
  
  const [total, setTotal] = useState([])

  return (
    <div>
      <Nav setTotal={setTotal} />
      
      <Switch>
        <Route path='/pizza'>
          <Pizza total={total} setTotal={setTotal} />
        </Route>
        <Route path='/success'>
          <Success order={total} />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
