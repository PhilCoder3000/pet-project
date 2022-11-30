import { render, screen } from '@testing-library/react';
import MainPage from './MainPage';
import { BrowserRouter } from 'react-router-dom';

describe('MainPage', () => {
  test('it should render', () => {
    render(<MainPage />, { wrapper: BrowserRouter });
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
  });
});
