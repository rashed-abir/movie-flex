import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AllMovies from "./component/AllMovies";
import MovieDetails from "./component/MovieDetails";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Switch>
          <Route path="/" exact component={AllMovies}></Route>
          <Route path="/movie/:id" exact="true" component={MovieDetails} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
