import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import GlobalStyles from '../src/GlobalStyles';

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone6',
  },
});
const GlobalStylesDecorator = (storyFn) => (
  <main>
    <GlobalStyles />
    {storyFn()}
  </main>
);
addDecorator(GlobalStylesDecorator);

// automatically import all files ending in *.stories.js
configure(require.context('../src/stories', true, /\.stories\.js$/), module);
