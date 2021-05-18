import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';
import Navbar from './components/Navbar';
import FirstPage from './components/FirstPage';
import QuestionBank from './components/QuestionBank';
import styles from 'App.module.scss';


export const App = () => {

  const [theme, setTheme] = useState(lightTheme);

  const changeTheme = (value) => {
    setTheme(value);
  }



  return (
    <ThemeProvider theme={theme}>
      <>
      <GlobalStyles />
      
        <select onChange={changeTheme(this.value)}>
          <option value={lightTheme}>Standard</option>
          <option value={darkTheme}>Dark mode</option>
        </select>

        <Navbar />
        <FirstPage />
        <QuestionBank />
      </>
    </ThemeProvider>
  )
}

export default App;