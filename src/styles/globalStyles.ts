import reset from "styled-reset"
import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    ${reset}
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    body{
        font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    input, button {
        background-color: transparent;
        border: none;
        outline: none;
    }   
    h1, h2, h3, h4, h5, h6{
        font-family:'Maven Pro', sans-serif;
    }
    ol, ul, li {
        list-style: none;
    }
`
