import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import React from 'react';

import FormComponent from '@/components/FormComponent';

describe('FormComponent', () => {
  test('renders form fields correctly', () => {
    render(<FormComponent />);

    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Address/i)).toBeInTheDocument();
  });

  test('displays validation error messages when submitting an empty email', () => {
    render(<FormComponent />);

    const emailInput = screen.getByLabelText('Email');
    const submitButton = screen.getByText(/Send/i);

    fireEvent.change(emailInput, { target: { value: '' } });

    fireEvent.click(submitButton);

    expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
  });

  test('displays validation error messages when submitting an empty phone', () => {
    render(<FormComponent />);

    const emailInput = screen.getByLabelText('Phone');
    const submitButton = screen.getByText(/Send/i);

    fireEvent.change(emailInput, { target: { value: '' } });

    fireEvent.click(submitButton);

    expect(screen.getByText(/Phone is required/i)).toBeInTheDocument();
  });

  test('displays validation error messages when submitting an empty name', () => {
    render(<FormComponent />);

    const emailInput = screen.getByLabelText('Name');
    const submitButton = screen.getByText(/Send/i);

    fireEvent.change(emailInput, { target: { value: '' } });

    fireEvent.click(submitButton);

    expect(screen.getByText(/Phone is required/i)).toBeInTheDocument();
  });
});
