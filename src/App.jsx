import React, { useState } from 'react';
// import { ThemeProvider } from 'styled-components';
// import { lightTheme, darkTheme } from './theme';
// import { GlobalStyles } from './global';
// import Navbar from './components/Navbar';
// import FirstPage from './components/FirstPage';
// import QuestionBank from './components/QuestionBank';
// import ThemeSelector from './components/ThemeSelector';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
//Pages
import MainPage from "./pages";
import AnswersPage from "./pages/answers";
import ClosedAppraisals from "./pages/closedappraisals";
import NotFoundPage from "./pages/404";


export const App = () => {

  // const [theme, setTheme] = useState({lightTheme});

  // const selectedTheme = darkTheme;

  return (

  <Router>
    <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/answers" component={AnswersPage} />
        <Route exact path="/closedappraisals" component={ClosedAppraisals} />
        <Route exact path="/404" component={NotFoundPage} />
        <Redirect to="404" />
    </Switch>
  </Router>

    // <ThemeProvider theme={selectedTheme}>
    //   <>
    //     <GlobalStyles />    
    //       {/* <button onClick={setTheme({darkTheme})}>Dark</button>
    //       <button onClick={setTheme({lightTheme})}>Light</button> */}
    //       <Navbar theme={selectedTheme} />
    //       <ThemeSelector />
    //       <FirstPage />
    //       <QuestionBank />
    //   </>
    // </ThemeProvider>
  )
}

export default App;