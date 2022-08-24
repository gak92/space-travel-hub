import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import Header from "../components/Header";

it('Header renders correctly', () => {
  const tree = render(
    <Router>
      <Header />
    </Router>
  );
  expect(tree).toMatchSnapshot();
});

it('Header user interaction', () => {
  render(
    <Router>
      <Header />
    </Router>
  );

  const Element = screen.getByText('Space Travelers hub');
  expect(Element).toBeInTheDocument();
});