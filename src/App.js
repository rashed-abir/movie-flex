import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllMovies from "./component/AllMovies";

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <Router>
        <Switch>
          <Route path="/movie-flex" exact>
            <AllMovies />
          </Route>
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
