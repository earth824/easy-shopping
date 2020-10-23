import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Layout from './components/Layout';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Shopping from './pages/Shopping';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/shopping" component={Shopping} />
          <Route path="/cart" component={Cart} />
          <Redirect to="/home" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
