import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact to="/">
          <Home></Home>
        </Route>
        <Route to="/home">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
