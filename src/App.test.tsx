import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Test to test testing', () => {
  test('App renders title', () => {
    render(<App />);
    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toHaveTextContent('Dél-Heves');
  });
});
