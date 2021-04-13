import MediaCard from "./componentes/Transport1/Transport";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Destination from "./componentes/Destination/Destination";
import Home from "./componentes/Home/Home";
import Contact from "./componentes/Contact/Contact";
import Blog from "./componentes/Blog/Blog";
import Login from "./componentes/Login/Login";

export default function App() {
  return (
    <Router>
      <div className="style">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Destination">Destination</Link>
          </li>
          <li>
            <Link to="/Blog">Blog</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Destination">
            <Destination />
          </Route>
          <Route path="/Blog">
            <Blog />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
