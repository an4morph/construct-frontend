import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.normal};
  }
  html {
    background-color: ${({ theme }) => theme.colors.body};
    max-width: 100vw;
    width: 100vw;
    height: 100%;
    overflow-x: hidden;
  }
  strong {
    font-weight: 700;
  }
  button {
    border: none;
    background-color: transparent;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    font-style: normal;
    font-stretch: normal;
    white-space: nowrap;
    padding: 0;
    margin: 0;
    -webkit-tap-highlight-color: transparent;
    color: inherit;
    cursor: pointer;
    &:active {
      transform: scale(0.98);
    }
  }
  a {
    color: inherit;
    text-decoration: none;
    position: relative;
    &.active {
      color: ${({ theme }) => theme.colors.primary};
    }
    &::after {
      transition: all 250ms;
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: ${({ theme }) => theme.colors.primary};
    }
    &:hover::after {
      transition: all 250ms;
      width: 100%;
    }
  }
`
