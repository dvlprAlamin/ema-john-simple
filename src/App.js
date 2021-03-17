import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Header/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Inventory from './components/Inventory/Inventory';
import Order from './components/Order/Order';
import Page404 from './components/Page404/Page404';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Proceed from './components/Proceed/Proceed';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import SignUp from './components/SignUp/SignUp';
import { AuthenticationProvider } from './components/AuthenticationContext/AuthenticationContext';

// export const AuthProvider = createContext();
function App() {

  return (
    // <AuthProvider.Provider value={[loggedUser, setLoggedUser]}>
      <AuthenticationProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
          {/* <Route path="/inventory">
            <Inventory />
          </Route> */}
          {/* <Route path="/proceed">
            
          </Route> */}
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/signup">
            <SignUp/>
          </Route>
          <PrivateRoute path="/inventory">
              <Inventory />
          </PrivateRoute>
          <PrivateRoute path="/proceed">
            <Proceed/>
          </PrivateRoute>
          <Route exact path="/">
            <Shop />
          </Route>
          <Route path="/product/:productKey">
            <ProductDetails/>
          </Route>
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
      </Router>
      </AuthenticationProvider>
  )
}


export default App
