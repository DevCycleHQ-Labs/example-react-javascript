import { render, screen } from '@testing-library/react';
import User from './User';
import { useVariableValue, useDevCycleClient } from '@devcycle/react-client-sdk';

test('renders greeting based on DevCycle variable', () => {
  useDevCycleClient.mockReturnValue({ user: { email: 'test@email.com' } })
  useVariableValue.mockReturnValue('good day!')

  render(<User />);
  const greetingElement = screen.getByText(/good day!/i);
  expect(greetingElement).toBeInTheDocument();
});
