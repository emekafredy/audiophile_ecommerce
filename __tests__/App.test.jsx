import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('NavBar test', () => {
  it('should contain the navbar menu', () => {
    render(<App />);
    const headphoneMenuOption = screen.getByText('Headphones');

    expect(headphoneMenuOption).toBeInTheDocument();
  });
});
