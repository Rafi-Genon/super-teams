import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import TeamDetails from './Components/TeamDetails/TeamDetails';
function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path='/team/:id'>
            <TeamDetails></TeamDetails>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
