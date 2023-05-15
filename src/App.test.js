import { fireEvent, waitFor, render, screen } from '@testing-library/react';
import Reservation from './components/Reservation';


test('renders the title Reserve a Table of', () =>
{
  render(<Reservation />);
  const h2WithRole = screen.getByRole('heading', { name: /Reserve a Table/i })
  expect(h2WithRole).toHaveTextContent('Reserve a Table');

})
test('should allow the user to reserve a table', async () =>
{
  render(<Reservation />);
  fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'John Doe' } })
  fireEvent.change(screen.getByLabelText('Phone'), { target: { value: '1234567890' } })
  fireEvent.change(screen.getByLabelText('Date'), { target: { value: '2023-05-16' } })
  fireEvent.click(screen.getByLabelText('2'))
  fireEvent.click(screen.getByLabelText('Outdoors'))
  fireEvent.click(screen.getByText('Reserve now!'))

  // Wait for the confirmation modal to appear
  await waitFor(() =>
  {
    expect(screen.getByText('Reservation Confirmed')).toBeInTheDocument();
  });

  // Simulate the click event on the Close button
  fireEvent.click(screen.getByText('Close'));

  // Wait for the confirmation modal to disappear
  await waitFor(() =>
  {
    expect(screen.queryByText('Reservation Confirmed')).not.toBeInTheDocument();
  });
});

