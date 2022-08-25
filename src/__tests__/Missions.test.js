import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Missions from '../components/home/Missions';
import MissionsItem from '../components/home/MissionsItem';

it('Test Mission component', () => {
  const tree = render(
    <Provider store={store}>
      <Router>
        <Missions />
      </Router>
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});

it('Test Mission Item component', async () => {
  render(
    <Router>
      <Provider store={store}>
        <MissionsItem />
      </Provider>
    </Router>,
  );

  const btnElement = await screen.findAllByRole('button');
  expect(btnElement).toHaveLength(1);
});
