import { render, screen } from '@testing-library/react';
import App from './App';
import { useIsDevCycleInitialized } from '@devcycle/react-client-sdk';

test('renders docs link', () => {
  render(<App />);
  const linkElement = screen.getByText(/devcycle react sdk docs/i);
  expect(linkElement).toBeInTheDocument();
});

test('displays loading when DevCycle is not initialized', () => {
  useIsDevCycleInitialized.mockReturnValue(false)

  render(<App />);
  const loadingElement = screen.getByText(/loading/i);
  expect(loadingElement).toBeInTheDocument();
});
