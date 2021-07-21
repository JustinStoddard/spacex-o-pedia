import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/core';

import LoginButton from '../index';
import theme from '../../../../Theme';

describe('Login Button', () => {

  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <LoginButton />
      </ThemeProvider>
    );
  });

  afterEach(cleanup);

  it('Renders', () => {
    const { getByTestId } = screen;
    const button = getByTestId("nav-login-button");

    expect(button).toBeInTheDocument();
  });
});