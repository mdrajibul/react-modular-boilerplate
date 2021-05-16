import { render, screen } from '@testing-library/react';
import { createBrowserHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';
import WelcomeComponent from '../../src/components/welcome';

const history = createBrowserHistory();

describe('WelcomeComponent', () => {
  beforeEach(async () => {
    render(
      <Router history={history}>
        <WelcomeComponent />
      </Router>
    );
  });

  test('render', async () => {
    expect(screen).toBeDefined();
  });
});
