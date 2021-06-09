import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import LandingPage from './Pages/LandingPage';

const CheckoutPage = lazy(() => import('./Pages/CheckoutPage'));
const NotFoundView = lazy(() => import('./Components/NotFoundView/NotFoundView'));

const App = () => {

  return (
    <Router>
      <Suspense fallback={<h1>loading...</h1>}>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path="/checkout/:category" component={CheckoutPage} />
          <Route exact path='/404' component={NotFoundView} />
          <Route path="*">
            <Redirect to='/404' />
          </Route>
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
