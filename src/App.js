import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Navbar from './components/Navbar';
import Stock from './components/Stock';
import Crypto from './components/Crypto';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route exact path='/stock' component={Stock} />
            <Route exact path='/crypto' component={Crypto} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
