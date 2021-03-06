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

  // Four arrays of strings for the four question categories (manually set for now; will eventually be drawn from server)
  const [customerQs, setCustomerQs] = useState([
  //  "Does Cerys communicate well with customers?",
  //   "Does Cerys treat others respectfully?"
  ])
  const [performanceQs, setPerformanceQs] = useState([
    // "Does Cerys ask questions to evaluate issues?",
    // "Are Cerys' solutions to problems and challenges clear and effective?",
    // "Is Cerys able to work autonomously?",
    // "Does Cerys seek the oppinions of others and use this input?"
  ])
  const [attitudeQs, setAttitudeQs] = useState([
    // "Does Cerys act professionally?",
    // "Does Cerys motivate others to reach goals?",
    // "Can you reply on Cerys to follow through with their promises?"
  ])
  const [engagementQs, setEngagementQs] = useState([
    // "Does Cerys communicate well with supervisors?",
    // "Does Cerys seek to improve by learning new skills and techniques?"
  ])
  // TO DO: When a respondent visits the AnswersPage, their link will need to indicate who's appraisal they're completing

  const handleChange= (newTheme) => {
    setTheme(newTheme);
  }

  const addCustomerQ = (question) => {
    customerQs.push(question)
    console.log(customerQs)
  }

  const addPerformanceQ = (question) => {
    performanceQs.push(question)
    console.log(performanceQs)
  }

  const addAttitudeQ = (question) => {
    attitudeQs.push(question)
    console.log(attitudeQs)
  }

  const addEngagementQ = (question) => {
    engagementQs.push(question)
    console.log(engagementQs)
  }

  return (

      <>
        <Router>
          <Switch>
            <Route exact path="/" render={(props) => (
              <Index {...props}
                theme={theme}
                addCustomerQ={addCustomerQ}
                addPerformanceQ={addPerformanceQ}
                addAttitudeQ={addAttitudeQ}
                addEngagementQ={addEngagementQ}/>
            )} />

            <Route exact path="/answers" render={(props) => (
              <AnswersPage {...props} customerQs={customerQs} performanceQs={performanceQs} attitudeQs={attitudeQs} engagementQs={engagementQs} theme={theme}/>
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