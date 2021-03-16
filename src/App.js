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

export const AuthProvider = createContext();
function App() {
  const [loggedUser, setLoggedUser] = useState(false);
  return (
    <AuthProvider.Provider value={[loggedUser, setLoggedUser]}>
      
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
          <Route path="/proceed">
            <Proceed/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <PrivateRoute path="/inventory">
              <Inventory />
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
    </AuthProvider.Provider>
  )
}


export default App
