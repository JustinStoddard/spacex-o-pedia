import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from '@material-ui/core';
import { Auth0Provider } from '@auth0/auth0-react';

import LoginButton from '../index';
import theme from '../../../../Theme';
import { act } from 'react-dom/test-utils';

describe('Login Button', () => {
  const handleClick = jest.fn();

  beforeEach(() => {
    render(
      <Auth0Provider clientId="xxxx" domain="xxxx">
        <ThemeProvider theme={theme}>
          <LoginButton onClick={() => handleClick()} />
        </ThemeProvider>
      </Auth0Provider>
    );
  });

  afterEach(cleanup);

  test('Renders', () => {
    const { getByTestId } = screen;
    const button = getByTestId("nav-login-button");

    expect(button).toBeInTheDocument();
  });

  test('Calls onClick prop when clicked', async () => {
    const { getByTestId } = screen;
    const button = getByTestId("nav-login-button");

    await act(async () => {
      await fireEvent.click(button);
    });

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});