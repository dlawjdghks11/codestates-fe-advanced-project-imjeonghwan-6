import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset};
  div {
    display: flex;
    /* border: 1px solid black; */
  };
  #root {
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(white, white);
  };
  input::placeholder {
    color: whitesmoke;
  }
  textarea::placeholder {
    color: whitesmoke;
    font-size: 30px;
  }
  textarea {
    resize: none;
  }
  body {
    font-family: 'Spoqa Han Sans Neo';
  }
`;

export default GlobalStyle;