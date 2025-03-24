import { render, screen } from '@testing-library/react';
import Login from '../Auth/Login';// Adjust the import path

test('renders component correctly', () => {
  render(<Login/>);
  expect(screen.getByText(/some text/i)).toBeInTheDocument();
});
