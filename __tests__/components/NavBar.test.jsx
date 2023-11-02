import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from '../../src/components/Common/NavBar';

describe('NavBar test', () => {
  it('should contain the navbar menu', () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>,
    );
    const headphoneMenuOption = screen.getByText('Headphones');
    const earphoneMenuOption = screen.getByText('Earphones');
    const speakerMenuOption = screen.getByText('Speakers');

    expect(headphoneMenuOption).toBeInTheDocument();
    expect(earphoneMenuOption).toBeInTheDocument();
    expect(speakerMenuOption).toBeInTheDocument();
  });
});
