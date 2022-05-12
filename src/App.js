import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Works from './pages/Works';
import GetInTouch from './pages/GetInTouch';
import PortifolioProvider from './context/PortifolioProvider';


function App() {
  return (
    <PortifolioProvider>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/works" component={ Works } />
        <Route path="/getintouch" component={ GetInTouch } />
      </Switch>
    </PortifolioProvider>
  );
}

export default App;
