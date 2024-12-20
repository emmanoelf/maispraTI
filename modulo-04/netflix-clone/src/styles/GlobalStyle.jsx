import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Set core root defaults */
  html {
    font-size: 100%; /* 16px */
    -webkit-text-size-adjust: 100%; /* Prevent font scaling in landscape while allowing user zoom */
    -webkit-tap-highlight-color: transparent; /* Remove tap highlight color on iOS */
  }

  /* Set core body defaults */
  body {
    margin: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', 'Liberation Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Remove list styles on ul, ol elements with a class attribute */
  ul,
  ol {
    list-style: none;
    padding: 0;
  }

  /* Remove default padding */
  input,
  button,
  textarea,
  select {
    font: inherit;
    margin: 0;
    padding: 0;
  }

  /* Avoid text overflows */
  pre,
  code {
    font-family: monospace;
    overflow: auto;
  }

  /* Remove all animations, transitions and smooth scroll */
  * {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
`;

export default GlobalStyle;