import HomePage from '../pages/homepage/Homepage';
import { Route, Switch } from 'react-router-dom';

const HatsPage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <h1>E-Commerce-React-App</h1>
      <Switch>
        <Route exact path="/" component={HomePage} />

        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
