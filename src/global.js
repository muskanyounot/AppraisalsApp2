import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

* {
  text-decoration: none;
}
a:link {
  color: ${({ theme }) => theme.headerText};
}

a:visited {
  color: ${({ theme }) => theme.headerText};
}

::placeholder {
  color: ${({ theme }) => theme.dropdownText};
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
    cursor: pointer;
  }

  body {
    header {
      border-bottom: ${({ theme }) => theme.border};
    }
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    input {
      border: none;
      background: ${({ theme }) => theme.inputbackground};
    }

    #pillar {
      border-bottom: ${({ theme }) => theme.emphasisBorder};
    }
  }

  navbar {
    background-color: ${({ theme }) => theme.fill};
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