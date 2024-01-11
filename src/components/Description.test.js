import { render, screen } from '@testing-library/react';
import Description from './Description';
import { useVariableValue } from '@devcycle/react-client-sdk';

test.each([
  'default',
  'step-1',
  'step-2',
  'step-3',
])('renders description text for value "%s"', (step) => {
  useVariableValue.mockReturnValue(step)

  render(<Description />);
  const element = screen.getByTestId('app-description')
  expect(element.textContent).toMatchSnapshot()
});
