import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme, darkTheme, calmTheme, warmTheme, hiContrastTheme } from './theme';
import { GlobalStyles } from './global';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";

//Pages
import Index from "./pages/index";
import AnswersPage from "./pages/AnswersPage";
import ClosedAppraisals from "./pages/closedappraisals";
import NotFoundPage from "./pages/NotFoundPage";
import UserProfilePage from "./pages/UserProfilePage";


export const App = () => {

  const [theme, setTheme] = useState(defaultTheme);

  const handleChange= (newTheme) => {
    setTheme(newTheme);
  }

  return (

      <>
        <Router>
          <Switch>
            <Route exact path="/" render={(props) => (
              <Index {...props} theme={theme} themeChanger={handleChange}/>
            )} />

            <Route exact path="/answers" render={(props) => (
              <AnswersPage {...props} theme={theme}/>
            )} />

            <Route exact path="/closedappraisals" render={(props) => (
              <ClosedAppraisals {...props} theme={theme}/>
            )} />
            
            <Route exact path="/userprofile" render={(props) => (
              <UserProfilePage {...props} theme={theme} themeChanger={handleChange}/>
            )} />

            <Route exact path="/404" render={(props) => (
              <NotFoundPage {...props} theme={theme}/>
            )} />

            <Redirect to="404" />
          </Switch>
        </Router>
      </>
  )
}

export default App;