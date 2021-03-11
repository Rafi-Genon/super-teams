import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// imported react router data
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// imported component here down below
import Home from './Components/Home/Home';
import TeamDetails from './Components/TeamDetails/TeamDetails';
import Footer from './Components/Footer/Footer';
import NoMatch from './Components/NoMatch/NoMatch';
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

          <Route path='*'>
            <NoMatch></NoMatch>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
