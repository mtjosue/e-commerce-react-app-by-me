import HomePage from '../pages/homepage/HomePage';
import { Route, Switch } from 'react-router-dom';
import ShopPage from '../pages/shop/ShopPage';
import './App.css';

function App() {
  return (
    <div>
      <h1>E-Commerce-React-App</h1>
      <Switch>
        <Route exact path="/" component={HomePage} />

        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
