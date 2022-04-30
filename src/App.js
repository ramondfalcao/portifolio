import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Works from './pages/Works';
import GetInTouch from './pages/GetInTouch';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route path="/works" component={ Works } />
      <Route path="/getintouch" component={ GetInTouch } />
    </Switch>
  );
}

export default App;
