import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe("Application", () => {
  it("renders without crashing",  () => {
    render(<App />);
  });
});