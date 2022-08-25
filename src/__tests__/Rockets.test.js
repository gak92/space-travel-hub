import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Rockets from '../components/home/Rockets';
import store from '../redux/configureStore';

it('Test rocket component', () => {
  const tree = render(
    <Provider store={store}>
      <Router>
        <Rockets />
      </Router>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});

it('Test rocket Item component', async () => {
  render(
    <Provider store={store}>
      <Router>
        <Rockets />
      </Router>
    </Provider>,
  );

  const btnElement = await screen.findAllByRole('button');
  expect(btnElement).toHaveLength(4);
});
