import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`


  body {

    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    accent: ${({ theme }) => theme.accent};
    fill: ${({ theme }) => theme.fill};

    transition: all 0.25s linear;
  }
  
  navbar {
    background-color: ${({ theme }) => theme.fill};
    border: ${({ theme }) => theme.accent};
  }`