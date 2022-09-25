import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/global.styles';
import theme from '../themes/light';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
