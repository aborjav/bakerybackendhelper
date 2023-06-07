import React from 'react';
import { render, screen } from '@testing-library/react';
import DoughiOrFlourQuantity from './DoughInput';

describe('DoughiOrFlourQuantity', () => {
  test('renders input fields', () => {
    render(<DoughiOrFlourQuantity />);
    expect(screen.getByRole('spinbutton')).toBeInTheDocument(); // check for input of type number
    expect(screen.getByRole('combobox')).toBeInTheDocument(); // check for select dropdown
  });
});
