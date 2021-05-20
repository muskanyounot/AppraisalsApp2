import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  button {
    color: ${({ theme }) => theme.button.text};
    background: ${({ theme }) => theme.button.background};
    border: none;
  }

  body {
    header {
      border: ${({ theme }) => theme.body};
    }
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.5s linear;
    input {
      border: none;
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