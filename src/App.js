import React, {useState, useEffect} from "react";
import { Link, Route, Switch } from 'react-router-dom';


const App = () => {
  return (
    <div className="container">
      <Route exact path='/'>
      <h1>Lambda Eats</h1>
      {/* main body of code including current order here */}
      </Route>
      <Route path='/pizza'>
        
      </Route>
    </div>
  );
};
export default App;
