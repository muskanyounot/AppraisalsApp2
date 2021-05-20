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
  color: ${({ theme }) => theme.dropdownText};
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
    input {
      border: none;
      background: ${({ theme }) => theme.inputbackground};
    }
  }

  navbar {
    background-color: ${({ theme }) => theme.fill};
    border-bottom: ${({ theme }) => theme.border};
    color: ${({ theme }) => theme.headerText};



    .profileBtn {
      background-color: ${({ theme }) => theme.fill};
      border: ${({ theme }) => theme.border};
    }

    #profileText {
      color: ${({ theme }) => theme.headerText};
    }

  

  #profileDropdown {
      background: ${({ theme }) => theme.fill};
      color: ${({ theme }) => theme.text};
    }   } 
  `