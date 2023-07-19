import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LoginForm from './components/CPLoginForm/LoginForm';
import Home from './pages/Home/Home';
import ReceiptForm from './pages/Recibos/Recibos';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route path="/home" component={Home} />
        <Route path="/Recibos" component={ReceiptForm} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
