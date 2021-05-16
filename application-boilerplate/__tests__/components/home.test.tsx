import { render, screen } from '@testing-library/react';
import { createBrowserHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';
import HomeComponent from '../../src/components/Home';

const history = createBrowserHistory();

describe('WelcomeComponent', () => {
  beforeEach(async () => {
    render(
      <Router history={history}>
        <HomeComponent />
      </Router>
    );
  });

  test('render', async () => {
    expect(screen).toBeDefined();
  });
});
