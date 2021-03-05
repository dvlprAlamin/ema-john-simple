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
function App() {
  return (
    <div>
      
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
          <Route path="/inventory">
            <Inventory />
          </Route>
          <Route path="/proceed">
            <Proceed/>
          </Route>
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
    </div>
  )
}


export default App
