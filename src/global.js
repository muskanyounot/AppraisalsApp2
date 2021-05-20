import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

* {
  text-decoration: none;
}

textarea {
  background-color: ${({ theme }) => theme.inputbackground};
  outline: none;
  resize: none;
  border: none;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
}

select {
  background-color: ${({ theme }) => theme.inputbackground};
  color: ${({ theme }) => theme.text};
  border: none;
}

  button {
    color: ${({ theme }) => theme.button.text};
    background: ${({ theme }) => theme.button.background};
    border: none;
    border-radius: 2px;
  }

  button:hover {

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
    border-bottom: ${({ theme }) => theme.border};
    transition: all 0.5s linear;

    .profile-button {
      background-color: ${({ theme }) => theme.fill};
      border: ${({ theme }) => theme.accent};
      transition: all 0.5s linear;
    }
  }`