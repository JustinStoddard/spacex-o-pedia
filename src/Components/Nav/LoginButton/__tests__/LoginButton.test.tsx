import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import { ThemeProvider } from '@material-ui/core';
import { Auth0Provider } from '@auth0/auth0-react';

import LoginButton from '../index';
import theme from '../../../../Theme';
import { act } from 'react-dom/test-utils';

const mockHandleClick = jest.fn();

jest.mock('@auth0/auth0-react', () => ({
  Auth0Provider: ({ children }: any) => children,
  withAuthenticationRequired: ((component: any, _: any) => component),
  useAuth0: () => ({
    isLoading: false,
    user: { sub: "foobar" },
    isAuthenticated: true,
    loginWithRedirect: mockHandleClick
  })
}));

describe('Login Button', () => {

  beforeEach(() => {
    render(
      <Auth0Provider domain="xxxx" clientId="xxxx">
        <ThemeProvider theme={theme}>
          <LoginButton />
        </ThemeProvider>
      </Auth0Provider>
    );
  });

  afterEach(cleanup);

  it('Renders', () => {
    const { getByTestId } = screen;
    const button = getByTestId("nav-login-button");

    expect(button).toBeInTheDocument();
  });

  it('Clicks when onClick prop is triggered', () => {
    const { getByTestId } = screen;
    const button = getByTestId("nav-login-button");

    act(() => {
      fireEvent.click(button);
    });

    expect(mockHandleClick).toHaveBeenCalledTimes(1);
  });
});