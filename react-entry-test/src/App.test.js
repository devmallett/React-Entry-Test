import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { cleanup } from '@testing-library/react';
import "@testing-library/jest-dom"

afterEach(cleanup)

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// Checks if buttons rendered properly
it("renders when clicked in table ", () => {
  const div = document.createElement("div");
  ReactDOM.render(<button></button>, div)
});

