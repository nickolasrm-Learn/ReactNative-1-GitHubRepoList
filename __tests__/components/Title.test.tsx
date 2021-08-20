import React from 'react'
import { render } from '@testing-library/react-native'
import Title from '../../components/atoms/Title'
import { hasStyle } from '../common'

test('Title rendered', () => {
  const txt = render(<Title>Test</Title>).getByText('Test')
  expect(txt).toBeDefined()
})

test('Multiple title styles', () => {
  const txt = render(<Title style={{ color: 'red' }}>Test</Title>).getByText('Test')
  expect(hasStyle(txt, 'color', 'red')).toBeTruthy()
})
