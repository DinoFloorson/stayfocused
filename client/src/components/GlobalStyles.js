import React from 'react';
import { Global, css } from '@emotion/core';

function GlobalStyles() {
  return (
    <Global
      styles={css`
        body {
          margin: 0;
          box-sizing: border-box;
          background: white;
          height: 100vh;
          color: #011e62;
          font-family: Roboto;
          font-size: 16px;
        }
      `}
    />
  );
}

export default GlobalStyles;
