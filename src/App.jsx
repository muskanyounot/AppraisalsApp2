import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, summerTheme, liltTheme } from './theme';
import { GlobalStyles } from './global';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
//Pages
import Index from "./pages/Index";
import AnswersPage from "./pages/AnswersPage";
import ClosedAppraisals from "./pages/ClosedAppraisals";
import NotFoundPage from "./pages/NotFoundPage";


export const App = () => {

  const [theme, setTheme] = useState(lightTheme);

  const selectedTheme = lightTheme;

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
        
            <Route exact path="/404" render={(props) => (
              <NotFoundPage {...props} theme={theme}/>
            )} />

            <Redirect to="404" />
          </Switch>
        </Router>
      </>

  
    //       {/* <button onClick={setTheme({darkTheme})}>Dark</button>
    //       <button onClick={setTheme({lightTheme})}>Light</button> */}
    //       <Navbar theme={selectedTheme} />
    //       <ThemeSelector />
    //       <FirstPage />
    //       <QuestionBank />

  )
}

export default App;