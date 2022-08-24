import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import MyProfile from "../components/home/MyProfile";

it("Test MyProfile component", () => {
  const tree = render(
    <Provider store={store}>
      <Router>
        <MyProfile />
      </Router>
    </Provider>
  );
  expect(tree).toMatchSnapshot();
});

it("Test MyProfile have text My Missions", () => {
  render(
    <Provider store={store}>
      <Router>
        <MyProfile />
      </Router>
    </Provider>
  );
  const ele = screen.getByText(/My missions/i);
  expect(ele).toBeInTheDocument();
});

it("Test MyProfile have text My Rockets", () => {
  render(
    <Provider store={store}>
      <Router>
        <MyProfile />
      </Router>
    </Provider>
  );
  const ele = screen.getByText(/My Rockets/i);
  expect(ele).toBeInTheDocument();
});
