import { render, screen } from '@testing-library/react';
import Home from "./components/pages/home/Home";

test('renders learn react link', () => {
  render(<Home />);
  const txtLanding = screen.getByText(/PI Dogs/i);
  expect(txtLanding).toBeInTheDocument();
});