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



test('renders reservation form with all required fields', () =>
{
  render(<Reservation />);
  expect(screen.getByLabelText('Reservation Name')).toBeInTheDocument();
  expect(screen.getByLabelText('Reservation Contact Number')).toBeInTheDocument();
  expect(screen.getByLabelText('Number of Guests')).toBeInTheDocument();
  expect(screen.getByLabelText('Select Reservation Date')).toBeInTheDocument();
  expect(screen.getByLabelText('Sitting Preferences')).toBeInTheDocument();
  expect(screen.getByText('Reserve now!')).toBeInTheDocument();
});

test('displays error messages when required fields are not filled out', () =>
{
  render(<Reservation />);
  fireEvent.click(screen.getByText('Reserve now!'));
  expect(screen.getByText('Reservation Name is required')).toBeInTheDocument();
  expect(screen.getByText('Reservation phone is required')).toBeInTheDocument();
  expect(screen.getByText('Please select the number of guests')).toBeInTheDocument();
  expect(screen.getByText('Please select the Reservation date')).toBeInTheDocument();
  expect(screen.getByText('Please choose your preferred sitting area')).toBeInTheDocument();
});

test('submits reservation form when all required fields are filled out', () =>
{
  render(<Reservation />);
  fireEvent.change(screen.getByLabelText('Reservation Name'), { target: { value: 'John' } });
  fireEvent.change(screen.getByLabelText('Reservation Contact Number'), { target: { value: '555-555-5555' } });
  fireEvent.change(screen.getByLabelText('Number of Guests'), { target: { value: '4' } });
  fireEvent.change(screen.getByLabelText('Select Reservation Date'), { target: { value: '2023-06-01' } });
  fireEvent.change(screen.getByLabelText('Sitting Preferences'), { target: { value: 'outdoors' } });
  fireEvent.click(screen.getByText('Reserve now!'));
  expect(screen.queryByText('Reservation Name is required')).not.toBeInTheDocument();
  expect(screen.queryByText('Reservation phone is required')).not.toBeInTheDocument();
  expect(screen.queryByText('Please select the number of guests')).not.toBeInTheDocument();
  expect(screen.queryByText('Please select the Reservation date')).not.toBeInTheDocument();
  expect(screen.queryByText('Please choose your preferred sitting area')).not.toBeInTheDocument();
  expect(screen.getByText('Reservation Successful')).toBeInTheDocument();
  expect(screen.getByText('We are looking forward to seeing you soon!')).toBeInTheDocument();
});


