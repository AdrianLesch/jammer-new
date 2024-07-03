import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MockBox } from './App'; // Assuming MockBox is exported for testing

describe('MockBox Component Tests', () => {
  test('renders without crashing', () => {
    render(<MockBox savedPlaylist={[]} />);
    expect(screen.getByText(/Saved Playlist Item/i)).toBeInTheDocument();
  });

  test('displays "Nothing to show" when savedPlaylist is empty', () => {
    render(<MockBox savedPlaylist={[]} />);
    expect(screen.getByText(/Nothing to show/i)).toBeInTheDocument();
  });

  test('displays savedPlaylist items when not empty', () => {
    const mockPlaylist = [{ id: 1, name: 'Test Track' }];
    render(<MockBox savedPlaylist={mockPlaylist} />);
    expect(screen.getByText(JSON.stringify(mockPlaylist, null, 2))).toBeInTheDocument();
  });
});