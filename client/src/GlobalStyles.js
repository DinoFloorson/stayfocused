import React from 'react';
import { Global, css } from '@emotion/core';
import colors from '../src/utils/colors';

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
          color: ${colors.primaryBackground};
          background: ${colors.primaryText};
          height: 100vh;
          margin: 0;
        }
      `}
    />
  );
}

export default GlobalStyles;
