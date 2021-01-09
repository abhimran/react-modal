import React from "react";
import {
  BrowserRouter as Router, Route, Switch,
} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ModalSwitch from './components/ModalSwitch';
import ToastMain from "./components/toast/ToastMain";

function App() {
  
  return (
    <Router>
     <Switch>
       <Route exact path="/" >
          <Dashboard></Dashboard>
       </Route>
        <Route path="/modal">
          <ModalSwitch/>
       </Route>
       <Route path='/toast'>
         <ToastMain></ToastMain>
       </Route>
     </Switch>
    </Router>
  );
}

export default App;
