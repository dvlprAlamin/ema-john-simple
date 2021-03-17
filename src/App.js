import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Header/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  useLocation
} from "react-router-dom";
import Inventory from './components/Inventory/Inventory';
import Order from './components/Order/Order';
import Page404 from './components/Page404/Page404';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Proceed from './components/Proceed/Proceed';
import LoginSignUp from './components/LoginSignUp/LoginSignUp';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import SignUp from './components/LoginSignUp/LoginSignUp';
import Footer from './components/Footer/Footer';
import { createContext, useState } from 'react';

export const UserContext = createContext()
function App() {
  const [loggedUser, setLoggedUser] = useState(false);
  const [user, setUser] = useState({
    name:'',
    email:'',
    password:''
  })
  return (
    <UserContext.Provider value={{loggedUser,setLoggedUser,user,setUser}}>
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
            <LoginSignUp/>
          </Route>
          <Route path="/signup">
          <LoginSignUp/>
          </Route>
          <PrivateRoute path="/inventory">
            <Inventory />
          </PrivateRoute>
          <PrivateRoute path="/proceed">
            <Proceed />
          </PrivateRoute>
          <Route exact path="/">
            <Shop />
          </Route>
          <Route path="/product/:productKey">
            <ProductDetails />
          </Route>
          <Route path="*">
            <Page404 />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </UserContext.Provider>
  )
}


export default App;
