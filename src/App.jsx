import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

//Pages
import Index from "./pages/Index";
import AnswersPage from "./pages/AnswersPage";
import ClosedAppraisals from "./pages/ClosedAppraisals";
import NotFoundPage from "./pages/NotFoundPage";


export const App = () => {


  return (

  <Router>
    <Switch>
        <Route exact path="/" component={Index} />
        <Route exact path="/answers" component={AnswersPage} />
        <Route exact path="/closedappraisals" component={ClosedAppraisals} />
        <Route exact path="/404" component={NotFoundPage} />
        <Redirect to="404" />
    </Switch>
  </Router>

  )
}

export default App;