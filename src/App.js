import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllMovies from "./component/AllMovies";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <AllMovies />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
