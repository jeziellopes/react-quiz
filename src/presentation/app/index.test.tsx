import App from '@presentation/app'
import { render, screen } from '@testing-library/react'
import React from 'react'

test('renders react quiz title', () => {
  render(<App />)
  const linkElement = screen.getByText(/Quiz/i)
  expect(linkElement).toBeInTheDocument()
})
