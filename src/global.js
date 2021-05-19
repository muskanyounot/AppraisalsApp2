import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`





  body {
    header {
      border: ${({ theme }) => theme.accent};
    }
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};

  transition: all 0.5s linear;
    input {
    background: ${({ theme }) => theme.inputbackground};
  }
  }

  

  navbar {
    background-color: ${({ theme }) => theme.fill};
    border: ${({ theme }) => theme.accent};
    transition: all 0.5s linear;

    .profile-button {
      background-color: ${({ theme }) => theme.fill};
      border: ${({ theme }) => theme.accent};
      transition: all 0.5s linear;
    }
  }`