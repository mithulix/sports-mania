import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import AllLeague from './Components/AllLeague/AllLeague';
import SingleLeague from './Components/SingleLeague/SingleLeague';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from './Components/Header/Header';
import NoMatch from './Components/NoMatch/NoMatch';


function App() {
  return (
    <div>
      <Router>
        <Switch>
            <Route path="/header">
              <Header/>
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/home">
                <Home />
            </Route>
            <Route path="/allleague">
                <AllLeague />
            </Route>
            <Route path="/SingleLeague/:id">
                <SingleLeague />
            </Route>
            <Route path="*">
              <NoMatch/>
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;


