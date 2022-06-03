import { render, screen } from '@testing-library/react'
import React from 'react'

import App from '.'

test('renders react quiz title', () => {
  render(<App />)
  const linkElement = screen.getByText(/React Quiz/i)
  expect(linkElement).toBeInTheDocument()
})
