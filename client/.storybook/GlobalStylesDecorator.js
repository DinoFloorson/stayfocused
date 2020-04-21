import React from 'react';
import GlobalStyles from '../src/GlobalStyles';

const GlobalStylesDecorator = (storyFn) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
);
export default GlobalStylesDecorator;
