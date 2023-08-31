import { Route, Switch } from "react-router-dom";
import Layout from "./layout/Layout";
import Shop from "./pages/Shop/Shop";
import ShoppingCart from "./pages/ShopingCart/ShoppingCart";
import RegisterPage from "./pages/Register/Register";
import LogInPage from "./pages/LogIn/LogInPage";

function App() {
  return (
    <div className="App">
      <Layout />
      <Switch>
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LogInPage} />
        <Route path="/cart" component={ShoppingCart} />
        <Route path="/" component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
