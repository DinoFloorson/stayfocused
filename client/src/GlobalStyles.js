import React from 'react';
import { Global, css } from '@emotion/core';

function GlobalStyles() {
  return (
    <Global
      styles={css`
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
        body {
          font-size: 16px;
          font-family: Roboto;
          height: 100vh;
          margin: 0;
        }
      `}
    />
  );
}

export default GlobalStyles;
